import * as path from "path";
import * as fs from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express'
import { NextFunction, Request, Response, Application } from "express";
import { Logger } from "@mybricks/rocker-commons";
import { safeEncodeURIComponent, MemoryState } from './utils'
import { loadApps, loadedApps, configuration, LoadedApp } from './utils/shared'

import UserDao from "./dao/UserDao";


/** 兼容离线模式的middleware，读取 html 文件时优先读取 offline.html 文件 */
const offlineHtmlSupportMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!configuration?.platformConfig?.isPureIntranet) {
    next();
    return
  }

  if (req.path.includes('.html')) {
    const parsedPath = path.parse(req.path);
    const app = loadedApps.find(app => parsedPath.dir === `/${app.namespace}` || parsedPath.dir === safeEncodeURIComponent(`/${app.namespace}`));

    if (app?.assetsDirectory) {
      // 获取文件名
      const fileName = parsedPath.name;

      const hasOfflineFile = fs.existsSync(path.resolve(app.assetsDirectory, `${fileName}.offline.html`))

      // 如果有离线文件则走离线文件
      if (hasOfflineFile) {
        req.url = req.url.replace('.html', '.offline.html');
      }
    }
  }
  next();
}

/** 将APP内静态资源挂载上来 */
export function installedAppMount(app: NestExpressApplication, installedAppsMeta: any[]) {

  app.use(offlineHtmlSupportMiddleware)

  installedAppsMeta?.forEach(appMeta => {
    const ns = appMeta.namespace;

    if (!appMeta?.assetsDirectory) {
      return
    }
    
    // ns切割
    app.useStaticAssets(appMeta.assetsDirectory, {
      prefix: `/${ns}`,
      index: false,
      setHeaders: (res, path, stat) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('X-Cached-By', 'MyBricks-App');
        if (path?.indexOf('.html') > -1) {
          res.set('Cache-Control', 'private, max-age=0') // html文件走协商缓存，private 为仅客户端可缓存，代理服务器不缓存
        } else {
          res.set('Cache-Control', `private, max-age=${60 * 60 * 24 * 7}`) // 其它文件走强缓存，7天内同名文件缓存，private 为仅客户端可缓存，代理服务器不缓存
        }
      },
      etag: true
    });
 
    // 静态资源hash规范，也支持直接访问
    app.useStaticAssets(appMeta.assetsDirectory, {
      prefix: `/`,
      index: false,
      setHeaders: (res, path, stat) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('X-Cached-By', 'MyBricks-App');
        if (path?.indexOf('.html') > -1) {
          res.set('Cache-Control', 'private, max-age=0') // html文件走协商缓存，private 为仅客户端可缓存，代理服务器不缓存
        } else {
          res.set('Cache-Control', `private, max-age=${60 * 60 * 24 * 7}`) // 其它文件走强缓存，7天内同名文件缓存，private 为仅客户端可缓存，代理服务器不缓存
        }
      },
      etag: true
    });

    MemoryState.appStatus.setFeStatus(ns, true)
  })
}

const PAAS_PREFIX = [
  "/api/apps/",
  "/api/config/",
  "/api/file/",
  "/api/ground/",
  "/api/product/",
  "/api/system/",
  "/api/task/",
  "/api/user/",
  "/api/workspace/",
];

/** 将APP内相对路由转到平台上来 */
const routerRedirectMiddleWare = (namespaceMap) => {

  const appRegs = [];
  const paasRegs = [];
  const prefixList = Object.keys(namespaceMap)
  prefixList?.forEach((prefix) => {
    appRegs.push({
      reg: new RegExp(`^/${prefix}/`),
      namespace: prefix
    });
  });
  PAAS_PREFIX?.forEach((prefix) => {
    paasRegs.push(new RegExp(`^${prefix}`));
  });
  return (req: Request, res: Response, next: NextFunction) => {
    let handleUrl = req.url;
    let jumpPaas = false;
    let customPrefixList = Object.keys(global.MYBRICKS_MODULE_CUSTOM_PATH || {})
    let jumpCustomController = false
    customPrefixList?.forEach((prefix) => {
      if(req?.path?.startsWith(prefix)) {
        jumpCustomController = true
        return
      }
    })
    if(jumpCustomController) {
      console.log('自定义业务接口，跳过', req?.path)
      next()
      return
    }
    appRegs.forEach(({reg, namespace}) => {
      if (reg.test(handleUrl)) {
        jumpPaas = true;
        if(namespaceMap?.[namespace]?.hasServer) {
          let isPaaSInterface = false
          PAAS_PREFIX.forEach(i => {
            if(handleUrl.indexOf(i) !== -1) {
              isPaaSInterface = true
            }
          })
          if(isPaaSInterface) {
            if(handleUrl.indexOf('/paas/') !== -1) {
              handleUrl = handleUrl.replace(reg, "/");
            } else {
              handleUrl = handleUrl.replace(reg, "/paas/");
            }
          } else {
            handleUrl = handleUrl.replace(reg, "/");
          }
        } else {
          if(handleUrl.indexOf('/paas/') !== -1) {
            handleUrl = handleUrl.replace(reg, "/");
          } else {
            handleUrl = handleUrl.replace(reg, "/paas/");
          }
        }
      }
    });
    if (!jumpPaas) {
      paasRegs.forEach((reg, index) => {
        const restPart = PAAS_PREFIX[index].split("/api/")?.[1];
        if (restPart) {
          handleUrl = handleUrl.replace(reg, `/paas/api/${restPart}`);
        }
      });
    }
    req.url = handleUrl;
    next();
  };
};

/** 将APP内相对路由转到平台上来 */
export function installedAppRouterMount(app: NestExpressApplication, loadedApps: LoadedApp[]) {

  const namespaceMap = {}
  loadedApps.forEach(a => {
    namespaceMap[a.namespace] = {
      hasServer: a.hasServer
    }
  })

  app.use(routerRedirectMiddleWare(namespaceMap))
}

export function installedAppMiddlewareMount(app: NestExpressApplication, loadedApps: LoadedApp[]) {

  const userDao = new UserDao();
  const context = {
    /**
     * @deprecated 历史遗留
     */
    userDao,
    UserModel: {
      query: async ({ email }) => userDao.queryByEmail({ email }),
      create: async (user) => userDao.create(user)
    },
    setUser: (request, { email }) => {
      if (request?.headers) {
        // 历史遗留，需要将 email 写入
        request.headers['username'] = email
      }
    },
    Logger,
  }

  loadedApps.forEach(a => {
    if (a.serverMiddlewareDirectory && fs.existsSync(a.serverMiddlewareDirectory)) {
      try {
        const middlewareFn = require(a.serverMiddlewareDirectory).default
        const middleware = middlewareFn(context) 
        app.use(middleware)
      } catch (e) {
        Logger.info(`中间件加载失败, 准备跳过：${e.message}`)
        Logger.info(`错误详情是: ${e?.stack?.toString()}`)
      }
    }
  })
}


export function loadInstalledAppMeta() {
  return loadedApps;
}

export function loadInstalledAppModules() {
  let modules = [];
  loadApps(({ serverModuleDirectory, hasServer, namespace }, appName) => {
    if (hasServer) {
      try {
        modules.push(require(serverModuleDirectory).default);
        MemoryState.appStatus.setServerStatus(namespace, true, '应用服务端模块加载成功')
      } catch (e) {
        if(!global.MYBRICKS_PLATFORM_START_ERROR) {
          global.MYBRICKS_PLATFORM_START_ERROR = ''
        }
        global.MYBRICKS_PLATFORM_START_ERROR += `\n 模块 ${appName} 加载失败 \n ${e.message.indexOf('Cannot find module') > -1 ? '可能是node_modules安装失败，建议重新/手动安装node_modules' : ''} \n 错误是：${e.message} \n 详情是: ${e?.stack?.toString()}`;
        Logger.info(`模块加载失败, 准备跳过：${e.message}`)
        Logger.info(`错误详情是: ${e?.stack?.toString()}`)
        MemoryState.appStatus.setServerStatus(namespace, false, `模块 ${appName} 加载失败， 错误是：${e.message} 详情是: ${e?.stack?.toString()}`)
      }
    }
    return {}
  })
  return modules
}