import React, { FC, PropsWithChildren, useState, useMemo, useContext, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { FilePaths, ViewType } from ".";
import { useUserContext, useWorkspaceConetxt } from "@/context";
import { storage } from "@/utils/local";
import { MYBRICKS_WORKSPACE_DEFAULT_FILES_VIEWTYPE } from "@/const";
import { FileData } from "@/types";

export interface FilesContextValue {
  viewType: ViewType;
  setViewType: React.Dispatch<React.SetStateAction<FilesContextValue["viewType"]>>;
  filesInfo: {
    roleDescription: number;
    loading: boolean;
    files: FileData[];
  };
  filePathsInfo: {
    filePaths: FilePaths;
    loading: boolean;
  }
  refreshFiles: (params?: {
    file?: FileData;
    type: "create" | "delete" | "update"
  }) => void;
}
export interface FilesProviderProps extends PropsWithChildren {};

const FilesContext = React.createContext<FilesContextValue>({} as FilesContextValue);

/** 获取文件路径 */
const fetchFilePaths = async ({ groupId, parentId }, next) => {
  axios.get("/paas/api/file/getFilePath", {
    params: {
      fileId: parentId,
      groupId
    }
  }).then(({ data }) => {
    next({
      filePaths: (!groupId ? [{id: null, name: '我的', parentId: null, groupId: null, extName: null}] : [] as FilePaths).concat(data.data),
      loading: false
    })
  })
}

/** 获取当前groupId下权限 */
const fetchRoleDescription = async ({ groupId, userId }) => {
  if (!groupId) {
    return 1
  }

  const response = (await axios.get("/paas/api/userGroup/getUserGroupRelation", {
    params: {
      id: groupId,
      userId,
    }
  })).data.data;

  return response ? response.roleDescription : 3;
}

/** 获取文件列表 */
const fetchFiles = async ({ groupId, parentId, userId }) => {
  // 区分”协作组“和“我的”
  return filesSort((await axios.get(`/paas/api/file/${groupId ? "getGroupFiles" : "getMyFiles"}`, {
    params: {
      userId,
      parentId,
      groupId
    }
  })).data.data);
}

/** 文件列表排序，将文件夹排在前面 */
const filesSort = (files: FileData[]) => {
  // 参与排序替换位置，数字越大越靠前
  const orderMap = {
    'folder': 1
  }
  return files.sort((c, s) => {
    const cNum = orderMap[c.extName] || -1
    const sNum = orderMap[s.extName] || -1

    return sNum - cNum
  })
}

/** 获取文件列表信息 */
const fetchFilesInfo = ({ userId, groupId, parentId, getApp }: any, next) => {
  Promise.all([
    fetchRoleDescription({ groupId, userId }),
    fetchFiles({ groupId, userId, parentId })
  ]).then(([roleDescription, files]) => {
    next({
      roleDescription,
      files: files.filter((file) => getApp(file.extName)),
      loading: false,
    });
  })
}

const DEFAULT_VIEWTYPE = storage.get(MYBRICKS_WORKSPACE_DEFAULT_FILES_VIEWTYPE) || "grid";

export const FilesProvider: FC<FilesProviderProps> = ({ children }) => {
  const { apps: { getApp } } = useWorkspaceConetxt();
  const { user: { id: userId } } = useUserContext();
  const [searchParams] = useSearchParams();
  const previousFetch = useRef<unknown>();
  const [viewType, setViewType] = useState<FilesContextValue["viewType"]>(DEFAULT_VIEWTYPE);
  const [filePathsInfo, setFilePathsInfo] = useState({
    loading: true,
    filePaths: []
  })
  const [filesInfo, setFilesInfo] = useState({
    loading: true,
    files: [],
    roleDescription: 3
  })

  useEffect(() => {
    const currentFetch = {};
    const groupId = searchParams.get("groupId");
    const parentId = searchParams.get("parentId");

    previousFetch.current = currentFetch;

    setFilePathsInfo((filePathsInfo) => {
      return {
        ...filePathsInfo,
        loading: true
      }
    })
    setFilesInfo((filesInfo) => {
      return {
        ...filesInfo,
        loading: true
      }
    })
    fetchFilesInfo({ userId, groupId, parentId, getApp }, (filesInfo) => {
      if (currentFetch === previousFetch.current) {
        setFilesInfo(filesInfo);
      }
    });
    fetchFilePaths({ groupId, parentId }, (filePathsInfo) => {
      if (currentFetch === previousFetch.current) {
        setFilePathsInfo(filePathsInfo);
      }
    })
  }, [searchParams])

  const value: FilesContextValue = useMemo(() => {
    storage.set(MYBRICKS_WORKSPACE_DEFAULT_FILES_VIEWTYPE, viewType);
    return {
      viewType,
      filesInfo,
      filePathsInfo,
      setViewType,
      refreshFiles: ({ file, type }) => {
        setFilesInfo((filesInfo) => {
        const { files, ...otherInfo } = filesInfo;
        if (type === "create") {
          handleCreateFile(files, file);
        } else if (type === "delete") {
          handleDeleteFile(files, file);
        } else if (type === "update") {
          handleUpdateFile(files, file);
        }
        
        return {
          files: files.concat(),
          ...otherInfo
        };
      })
      },
      refreshFilePaths: ({ filePath, type } = { filePath: null, type: null }) => {

      }
    }
  }, [viewType, filesInfo, filePathsInfo])

  return (
    <FilesContext.Provider value={value}>
      {children}
    </FilesContext.Provider>
  )
}

export const useFilesContext = () => {
  return useContext(FilesContext);
}

const handleCreateFile = (files: FileData[], file: FileData) => {
  if (file.extName === "folder") {
    files.unshift(file);
  } else {
    const index = files.findIndex((file) => file.extName !== "folder");
    if (index === -1) {
      files.push(file)
    } else {
      files.splice(index, 0, file);
    }
  }

  return files;
}

const handleDeleteFile = (files: FileData[], file: FileData) => {
  const index = files.findIndex((f) => f.id === file.id);
  files.splice(index, 1);

  return files;
}

const handleUpdateFile = (files: FileData[], file: FileData) => {
  const index = files.findIndex((f) => f.id === file.id);
  files.splice(index, 1, file);

  return files;
}
