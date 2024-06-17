import React, { FC, ReactNode } from "react";

import css from "./index.less";

/** 垂直 V 形 */
export const ChevronVertical: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g id="chevron-vertical-16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M3.28 5.47a.75.75 0 00-1.06 1.06l5.25 5.25a.75.75 0 001.06 0l5.25-5.25a.75.75 0 00-1.06-1.06L8 10.19 3.28 5.47z" id="chevron" fill="currentColor" fill-rule="nonzero"/>
      </g>
    </svg>
  )
}

/** 共享、交流 */
export const SharedWithAll: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M8.478 5.5a.75.75 0 01.102 1.493L8.478 7h-.254c-.732 0-1.185.098-1.586.312a1.976 1.976 0 00-.826.826c-.19.357-.289.754-.308 1.352l-.004.286c0 .732.098 1.185.312 1.586.192.358.468.634.826.826.357.19.754.289 1.352.308l.234.004h3.552c.732 0 1.185-.098 1.586-.312.358-.192.634-.468.826-.826.19-.357.289-.754.308-1.352l.004-.286c0-.732-.098-1.185-.312-1.586a1.97 1.97 0 00-.666-.731.75.75 0 01.82-1.255 3.47 3.47 0 011.169 1.279c.305.571.457 1.19.484 2.011l.005.334c0 .965-.15 1.658-.49 2.293a3.476 3.476 0 01-1.441 1.442c-.571.305-1.19.457-2.011.484l-.282.005H8.224c-.965 0-1.658-.15-2.293-.49a3.476 3.476 0 01-1.442-1.441c-.305-.571-.457-1.19-.484-2.011L4 9.724c0-.965.15-1.658.49-2.293.33-.62.821-1.11 1.441-1.442.571-.305 1.19-.457 2.011-.484l.282-.005h.254zM7.776 2c.965 0 1.658.15 2.293.49.62.33 1.11.821 1.442 1.441.305.571.457 1.19.484 2.011l.005.334c0 .965-.15 1.658-.49 2.293a3.476 3.476 0 01-1.441 1.442c-.571.305-1.19.457-2.011.484l-.282.005h-.254a.75.75 0 01-.102-1.493L7.522 9h.254c.732 0 1.185-.098 1.586-.312.358-.192.634-.468.826-.826.19-.357.289-.754.308-1.352l.004-.286c0-.732-.098-1.185-.312-1.586a1.976 1.976 0 00-.826-.826c-.357-.19-.754-.289-1.352-.308L7.776 3.5H4.224c-.732 0-1.185.098-1.586.312a1.976 1.976 0 00-.826.826c-.19.357-.289.754-.308 1.352l-.004.286c0 .732.098 1.185.312 1.586.162.303.385.547.666.731a.75.75 0 01-.82 1.255A3.47 3.47 0 01.488 8.57C.184 7.998.032 7.379.005 6.558L0 6.224c0-.965.15-1.658.49-2.293.33-.62.821-1.11 1.441-1.442.571-.305 1.19-.457 2.011-.484L4.224 2h3.552z" fill="currentColor"></path>
    </svg>
  )
}

/** 用户协作组 */
export const UserGroup: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13.5">
      <g fill="currentColor">
        <path d="M4.5 8.5c1.114 0 2.124.386 2.855 1.017.702.607 1.145 1.443 1.145 2.372-.328.437-.589.567-.9.679-.816.292-1.959.432-3.1.432s-2.284-.14-3.1-.432c-.311-.112-.572-.242-.746-.405-.154-1.203.289-2.039.991-2.646C2.375 8.886 3.386 8.5 4.5 8.5zm0-6c.552 0 1.052.224 1.414.586.362.362.586.862.586 1.414 0 .552-.224 1.052-.586 1.414A1.994 1.994 0 014.5 6.5a1.994 1.994 0 01-1.414-.586A1.994 1.994 0 012.5 4.5c0-.552.224-1.052.586-1.414A1.994 1.994 0 014.5 2.5z" fill-opacity="0.15"></path>
        <path d="M4.5 8C6.985 8 9 9.741 9 11.89c0 1.032-2.08 1.568-4.24 1.608l-.26.002c-2.25 0-4.5-.537-4.5-1.61 0-2.084 1.894-3.784 4.275-3.885L4.5 8zm0 1.5c-1.512 0-2.706.887-2.953 1.973l-.014.071.201.081.127.043c.658.21 1.622.332 2.639.332 1.017 0 1.98-.123 2.639-.332.09-.029.17-.057.239-.086l.088-.038-.013-.07c-.236-1.042-1.343-1.9-2.766-1.97L4.5 9.5zm0-7.5a2.5 2.5 0 01.164 4.995L4.5 7a2.5 2.5 0 01-.164-4.995L4.5 2zm0 1.5a1 1 0 100 2 1 1 0 000-2z"></path>
        <path d="M10.5 6.5c1.114 0 2.124.386 2.855 1.017.702.607 1.145 1.443 1.145 2.372-.328.437-.589.567-.9.679-.816.292-1.959.432-3.1.432h-.08c-.278-1.522-1.258-2.81-2.616-3.612l-.159.13C8.375 6.885 9.386 6.5 10.5 6.5zm0-6c.552 0 1.052.224 1.414.586.362.362.586.862.586 1.414 0 .552-.224 1.052-.586 1.414A1.994 1.994 0 0110.5 4.5a1.994 1.994 0 01-1.414-.586A1.994 1.994 0 018.5 2.5c0-.552.224-1.052.586-1.414A1.994 1.994 0 0110.5.5z" fill-opacity="0.15"></path>
        <path d="M10.5 6C12.985 6 15 7.741 15 9.89c0 1.032-2.08 1.568-4.24 1.608l-.26.002h-.015a4.91 4.91 0 00-.363-1.507c.124.005.25.007.378.007 1.017 0 1.98-.123 2.639-.332.09-.029.17-.057.239-.086l.088-.038-.013-.07c-.236-1.042-1.343-1.9-2.766-1.97L10.5 7.5a3.46 3.46 0 00-1.837.504 6.038 6.038 0 00-1.337-.871c.763-.657 1.8-1.08 2.95-1.128L10.5 6zm0-6a2.5 2.5 0 01.164 4.995L10.5 5a2.5 2.5 0 01-.164-4.995L10.5 0zm0 1.5a1 1 0 100 2 1 1 0 000-2z"></path>
      </g>
    </svg>
  )
}

/** 物料中心 */
export const MaterialCenter: FC = () => {
  return (
    <svg viewBox="-941 1809 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="template-16_svg__a">
          <path d="M4 0a1 1 0 011 1v4.5a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h3z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#template-16_svg__a)" transform="matrix(-1 0 0 1 -926.75 1810.75)">
        <path opacity="0.15" fill="currentColor" d="M0 0h5v6.5H0V0z"></path>
      </g>
      <path d="M-927.75 1810.75h-3a1 1 0 00-1 1v4.5a1 1 0 001 1h3a1 1 0 001-1v-4.5a1 1 0 00-1-1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-miterlimit="10"></path>
      <g clip-path="url(#template-16_svg__a)" transform="matrix(-1 0 0 1 -934.25 1816.75)">
        <path opacity="0.15" fill="currentColor" d="M0 0h5v6.5H0V0z"></path>
      </g>
      <path d="M-935.25 1816.75h-3a1 1 0 00-1 1v4.5a1 1 0 001 1h3a1 1 0 001-1v-4.5a1 1 0 00-1-1zm7.5 3h-3a1 1 0 00-1 1v1.5a1 1 0 001 1h3a1 1 0 001-1v-1.5a1 1 0 00-1-1zm-7.5-9h-3a1 1 0 00-1 1v1.5a1 1 0 001 1h3a1 1 0 001-1v-1.5a1 1 0 00-1-1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-miterlimit="10"></path>
    </svg>
  )
}

/** 文件夹 */
export const Folder: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M1 6h14v3a5 5 0 01-5 5H6a5 5 0 01-5-5V6z" fill-opacity="0.15"></path>
        <path d="M15 11.25A2.75 2.75 0 0112.25 14h-8.5A2.75 2.75 0 011 11.25v-7.5a1.75 1.75 0 011.606-1.744L2.75 2h3.132c.612 0 1.175.32 1.491.835l.074.132.099.198a.607.607 0 00.445.327l.098.008h5.161a1.75 1.75 0 011.744 1.606L15 5.25zM13.5 7.5h-11v3.75c0 .647.492 1.18 1.122 1.244l.128.006h8.5c.69 0 1.25-.56 1.25-1.25V7.5zm-7.618-4H2.75a.25.25 0 00-.243.193L2.5 3.75V6h11v-.75a.25.25 0 00-.193-.243L13.25 5H8.089a2.107 2.107 0 01-1.803-1.016l-.082-.149-.098-.197a.25.25 0 00-.168-.132L5.882 3.5z" fill-rule="nonzero"></path>
      </g>
    </svg>
  )
}

/** 我的应用、应用市场 */
export const AppStore: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33096" width="16" height="16">
      <path d="M136.731 404.95l12.741 51.713-44.219 161.386c-1.332 4.663-1.999 8.994-1.999 12.99 0 10.493 4.913 17.987 14.74 22.484l8.745 3.997c5.495 2.498 8.244 6.661 8.244 12.492 0 8.327-6.079 12.492-18.237 12.492h-63.456c-6.163 0-11.040-1.284-14.609-3.878-3.593-2.57-5.377-6.115-5.377-10.612 0-4.83 3.664-8.827 10.992-11.991 6.829-2.998 11.873-5.699 15.108-8.113 3.26-2.415 6.377-5.71 9.374-9.874 4.663-6.829 8.494-15.906 11.491-27.23l56.462-205.854zM153.969 341.495h100.678l69.451 293.542c1.332 5.163 2.831 9.743 4.497 13.74 1.499 3.165 4.83 5.746 9.993 7.744 4.33 1.831 7.328 3.664 8.993 5.495s2.498 4.33 2.498 7.494c0 8.66-6.496 12.99-19.486 12.99h-124.661c-4.996 0-8.993-1.202-11.991-3.616s-4.497-5.627-4.497-9.623c0-3.331 0.666-5.828 1.999-7.494s4.33-3.747 8.993-6.245c3.331-1.666 5.663-3.498 6.994-5.495 1.332-1.999 1.999-4.497 1.999-7.494 0-2.831-0.25-5.33-0.75-7.494l-7.995-36.224h-69.7l6.746-29.729h55.961l-45.967-203.106 6.246-24.483zM506.97 341.495v293.542c0 6.496 1.249 11.158 3.747 13.99 1.332 1.666 2.581 2.713 3.747 3.117 1.166 0.428 4.997 1.463 11.491 3.129 7.995 1.831 11.991 6.412 11.991 13.74 0 4.33-2.165 7.827-6.496 10.493-3.165 1.999-8.411 2.998-15.739 2.998h-126.411c-5.996 0-10.624-1.118-13.859-3.378-3.26-2.237-4.878-5.449-4.878-9.612 0-6.829 3.331-11.326 9.993-13.49 5.495-1.831 8.697-2.95 9.612-3.378 0.916-0.405 1.879-1.367 2.878-2.867 1.999-2.665 2.998-6.912 2.998-12.741v-250.074c0-5.828-0.998-10.076-2.998-12.741-0.998-1.499-1.963-2.45-2.878-2.879-0.916-0.405-4.116-1.535-9.612-3.366-6.661-2.165-9.993-6.661-9.993-13.49 0-4.164 1.618-7.363 4.878-9.623 3.235-2.237 7.863-3.366 13.859-3.366h117.667zM528.204 551.846v-26.732c7.162-1.666 12.193-3.414 15.12-5.246 2.902-1.831 5.449-4.663 7.614-8.494 3.498-6.496 5.246-15.238 5.246-26.231v-79.943c0-7.827-0.582-13.658-1.748-17.487-1.166-3.83-3.498-7.328-6.995-10.493-4.83-4.663-11.326-7.579-19.486-8.745v-26.98c34.309 0 59.625 3.247 75.947 9.743 18.82 7.494 33.726 18.986 44.719 34.476 11.158 15.822 16.738 35.225 16.738 58.209 0 25.649-5.663 46.634-16.988 62.955-11.326 16.156-27.148 28.063-47.466 35.725-16.822 6.164-41.055 9.244-72.699 9.244zM832.487 341.495v293.542c0 6.496 1.249 11.158 3.747 13.99 1.332 1.666 2.581 2.713 3.747 3.117 1.166 0.428 4.997 1.463 11.491 3.129 7.995 1.831 11.991 6.412 11.991 13.74 0 4.33-2.165 7.827-6.496 10.493-3.165 1.999-8.411 2.998-15.739 2.998h-126.41c-5.996 0-10.624-1.118-13.859-3.378-3.26-2.237-4.878-5.449-4.878-9.612 0-6.829 3.331-11.326 9.993-13.49 5.495-1.831 8.697-2.95 9.612-3.378 0.916-0.405 1.879-1.367 2.878-2.867 1.999-2.665 2.998-6.912 2.998-12.741v-250.074c0-5.828-0.999-10.076-2.998-12.741-0.998-1.499-1.963-2.45-2.878-2.879-0.916-0.405-4.116-1.535-9.612-3.366-6.661-2.165-9.993-6.661-9.993-13.49 0-4.164 1.618-7.363 4.878-9.623 3.235-2.237 7.863-3.366 13.859-3.366h117.666zM853.722 551.846v-26.732c7.162-1.666 12.193-3.414 15.12-5.246 2.902-1.831 5.449-4.663 7.614-8.494 3.498-6.496 5.246-15.238 5.246-26.231v-79.943c0-7.827-0.582-13.658-1.748-17.487-1.166-3.83-3.498-7.328-6.994-10.493-4.83-4.663-11.326-7.579-19.486-8.745v-26.98c34.309 0 59.625 3.247 75.947 9.743 18.82 7.494 33.726 18.986 44.719 34.476 11.158 15.822 16.738 35.225 16.738 58.209 0 25.649-5.663 46.634-16.988 62.955-11.326 16.156-27.148 28.063-47.466 35.725-16.822 6.164-41.056 9.244-72.7 9.244z" fill="currentColor" p-id="33097"></path>
    </svg>
  )
}

/** 设置 */
export const Settings: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M9.18.5a1 1 0 01.98.804L10.4 2.5c.414.18.804.406 1.162.672l1.157-.391a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.206 1.251l-.916.806a6.066 6.066 0 010 1.342l.916.806a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.186.447l-1.157-.39a5.994 5.994 0 01-1.161.671l-.24 1.196a1 1 0 01-.98.804H6.82a1 1 0 01-.98-.804l-.24-1.195a5.994 5.994 0 01-1.162-.673l-1.157.391a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.206-1.251l.916-.807a6.066 6.066 0 010-1.34l-.916-.807a1 1 0 01-.206-1.25l1.18-2.045A1 1 0 013.28 2.78l1.157.39A5.994 5.994 0 015.6 2.5l.24-1.195A1 1 0 016.82.5h2.36zM8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill-opacity="0.15"></path><path d="M9.18.5a1 1 0 01.98.804L10.4 2.5c.414.18.804.406 1.162.672l1.157-.391a1 1 0 01.228-.049l.114-.004a1 1 0 01.844.5l1.18 2.044a1 1 0 01-.206 1.251l-.916.806a6.066 6.066 0 010 1.342l.916.806a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-.731.491l-.113.009a.998.998 0 01-.342-.053l-1.157-.39a5.994 5.994 0 01-1.161.671l-.24 1.196a1 1 0 01-.98.804H6.82a1 1 0 01-.98-.804l-.24-1.195a5.986 5.986 0 01-.888-.481l-.274-.192-1.157.391a1 1 0 01-.228.049l-.114.004a1 1 0 01-.844-.5l-1.18-2.044a1 1 0 01.206-1.251l.916-.807a6.066 6.066 0 010-1.34l-.916-.807a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 01.731-.491l.113-.009a.998.998 0 01.342.053l1.157.39A5.994 5.994 0 015.6 2.5l.24-1.195A1 1 0 016.82.5h2.36zM8.77 2H7.23l-.159.793a1.5 1.5 0 01-.74 1.016l-.13.065a4.454 4.454 0 00-.872.504 1.5 1.5 0 01-1.215.258l-.157-.043-.768-.261-.77 1.335.609.536c.326.288.51.7.509 1.13l-.01.162a4.566 4.566 0 000 1.01 1.5 1.5 0 01-.383 1.178l-.116.114-.61.535.77 1.335.77-.26a1.5 1.5 0 011.235.126l.136.09c.271.2.563.369.872.503a1.5 1.5 0 01.834.939l.036.142.159.793h1.54l.16-.795a1.5 1.5 0 01.74-1.014l.13-.065c.308-.135.6-.304.87-.504a1.5 1.5 0 011.216-.258l.157.043.768.26.77-1.335-.608-.534a1.5 1.5 0 01-.51-1.13l.01-.163a4.566 4.566 0 000-1.01 1.5 1.5 0 01.384-1.18l.116-.113.608-.535-.77-1.335-.768.26a1.5 1.5 0 01-1.236-.125l-.136-.09c-.27-.2-.563-.368-.87-.503a1.5 1.5 0 01-.835-.937l-.036-.142L8.77 2zM8 5a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill-rule="nonzero"></path>
      </g>
    </svg>
  )
}

/** 网格视图 */
export const ViewAsGrid: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5">
        <rect x="4.75" y="4.75" width="5.5" height="5.5" rx="1.5"></rect>
        <rect x="13.75" y="4.75" width="5.5" height="5.5" rx="1.5"></rect>
        <rect x="4.75" y="13.75" width="5.5" height="5.5" rx="1.5"></rect>
        <rect x="13.75" y="13.75" width="5.5" height="5.5" rx="1.5"></rect>
      </g>
    </svg>
  )
}

/** 列表视图 */
export const ViewAsList: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 5.75h9m-9 6h9"></path>
        <circle fill="currentColor" cx="5.75" cy="5.75" r="1.25"></circle>
        <circle fill="currentColor" cx="5.75" cy="11.75" r="1.25"></circle>
        <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 17.75h9"></path>
        <circle fill="currentColor" cx="5.75" cy="17.75" r="1.25"></circle>
      </g>
    </svg>
  )
}

/** 操作日志 */
export const OperationLog: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36663" width="16" height="16">
      <path d="M768 192H256v64h512zM576 384H256v64h320zM448 576H256v64h192z" p-id="36664" fill="currentColor"></path>
      <path d="M832 576h64V64H128v896h320v-64H192V128h640z" p-id="36665" fill="currentColor"></path>
      <path d="M637.8 960H502V824.2L760.3 566 896 701.7 637.8 960zM566 896h45.3l194.3-194.3-45.3-45.3L566 850.7V896z" p-id="36666" fill="currentColor"></path>
    </svg>
  )
}

/** 用户管理 */
export const UserManagement: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37845" width="16" height="16">
      <path d="M829.2 932.6l1.1-0.7c10.8-7.5 14.9-22.2 9.6-34.1-0.4-0.9-3.4-8.4-3.4-14.9 0-21.5 17.5-39 39-39h1.8c11 0 19.7-8.8 22.3-22.4 0-0.2 3.9-20.2 3.9-36.2 0-15.2-3.4-34.1-3.8-36.2-2.6-13.6-11.3-22.4-22.6-22.4h-1.6c-21.5 0-39-17.5-39-39 0-5.6 2.5-12.6 3.4-14.7 5.3-12 1.2-26.7-10.6-34.9L783.7 613c-3.6-1.5-7.4-2.3-11.5-2.3-8.3 0-16.4 3.4-21.8 9-5.7 5.9-20.7 17.9-31.1 17.9-10.5 0-25.6-12.3-31.3-18.2-5.4-5.7-13.7-9.2-22-9.2-4 0-7.8 0.8-11.2 2.2l-0.9 0.3-46.4 25.5-1.1 0.7c-10.8 7.5-14.9 22.2-9.6 34.1 0.4 0.9 3.5 8.4 3.5 14.9 0 21.5-17.5 39-39 39h-1.8c-11 0-19.7 8.8-22.3 22.5-0.4 2.1-3.8 20.9-3.8 36.2 0 15.2 3.5 34.1 3.8 36.2 2.6 13.6 11.3 22.4 22.6 22.4h1.5c21.5 0 39 17.5 39 39 0 5.6-2.5 12.6-3.4 14.7-5.3 12-1.2 26.6 10.5 34.9l44.7 24.9c3.6 1.5 7.4 2.3 11.5 2.3 8.4 0 16.6-3.5 22-9.4 5.5-6 21.1-19.1 31.8-19.1 10.8 0 26.3 13.1 32 19.5 5.4 6 13.7 9.5 22.2 9.5 4 0 7.8-0.8 12.4-2.8l45.2-25.1zM717.4 896c-13 0-26.9 5.3-41.2 15.8-4.7 3.5-9.1 7.2-13.3 11.3l-31.2-17.4c1.8-5.6 4-13.9 4-22.6 0-37.6-28-69-64.7-73.8-0.9-6.1-2.3-16-2.3-23.8 0-7.9 1.3-17.7 2.3-23.8 36.7-4.8 64.7-36.2 64.7-73.8 0-8.7-2.1-16.9-3.9-22.5l33.7-18.5c2.9 2.8 7.6 6.9 13.4 11 14.1 10.1 27.8 15.2 40.5 15.2 12.6 0 26.1-5 40.2-14.9 5.7-4 10.3-8 13.3-10.8l32.2 17.9c-1.8 5.6-4 13.9-4 22.6 0 37.6 28 69 64.7 73.8 1 6.2 2.3 16 2.3 23.8 0 7.8-1.3 17.6-2.3 23.8C828.9 814 801 845.4 801 883c0 8.7 2.1 16.9 3.9 22.5l-32.6 18c-2.9-2.9-7.6-7.2-13.4-11.5-14.4-10.6-28.4-16-41.5-16z" p-id="37846" fill="currentColor"></path>
      <path d="M786.4 785.2c0-37.9-30.9-68.8-68.8-68.8s-68.8 30.9-68.8 68.8c0 38 30.9 68.8 68.8 68.8s68.8-30.9 68.8-68.8z m-68.8 33.4c-18.4 0-33.4-15-33.4-33.4s15-33.4 33.4-33.4 33.4 15 33.4 33.4c-0.1 18.4-15 33.4-33.4 33.4zM755.5 322.2c0-142.6-115.6-258.3-258.2-258.4v-0.1c-68.6 0-134.3 27.2-182.8 75.7-48.5 48.6-75.8 114.3-75.7 182.9 0 96.7 53.7 180 132.4 224.3-142.8 51.4-245.6 186.2-247 346.3v5.2c0.2 9.2 2 17.9 2.8 27.1h0.6c1.5 14.3 13.6 25.1 27.9 25.1 14.4 0 26.4-10.8 27.9-25.1h0.9c-0.8-9.7-2.9-19-2.9-28.8 0-83.8 33.2-164.1 92.4-223.4 59.2-59.2 139.6-92.5 223.4-92.5l28.7-2.9c128.9-14.3 229.6-122.5 229.6-255.4zM497.2 523.3c-111 0-201-90-201-201s90-201 201-201 201 90 201 201-89.9 201-201 201z" p-id="37847" fill="currentColor"></path>
    </svg>
  )
}

/** 用户 */
export const User: FC = () => {
  return (
    <svg viewBox="64 64 896 896" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
    </svg>
  )
}

/** 导出 */
export const Export: FC = () => {
  return (
    <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"></path>
    </svg>
  )
}

/** 删除(垃圾桶) */
export const Trash: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path d="M765.505691 191.942567 639.627772 191.942567c0-35.32453-28.636201-63.960731-63.960731-63.960731L447.74558 127.981836c-35.32453 0-63.960731 28.636201-63.960731 63.960731L257.905908 191.942567c-36.452213 0-66.00325 29.551036-66.00325 66.00325l0 59.875692c0 36.452213 29.551036 66.00325 66.00325 66.00325l-2.042519 0 0 445.681572c0 36.452213 29.551036 66.00325 66.00325 66.00325l61.918211 0 63.960731 0 127.921461 0 63.960731 0 61.918211 0c36.452213 0 66.00325-29.551036 66.00325-66.00325L767.549234 383.823736l-2.042519 0c36.452213 0 66.00325-29.551036 66.00325-66.00325l0-59.875692C831.508941 221.49258 801.958928 191.942567 765.505691 191.942567zM703.58748 803.413046c-0.101307 3.123131-1.743714 27.813462-27.961842 28.134781l-35.998889 0-63.960731 0L447.74558 831.547827 383.78485 831.547827l-35.879162 0c-27.988448-0.343831-27.969005-28.459169-27.969005-28.459169l-0.112564 0.031722L319.824119 383.823736l383.76336 0L703.58748 803.413046zM735.567845 319.863005 287.843754 319.863005c-17.662265 0-31.980365-14.3181-31.980365-31.980365 0-17.662265 14.3181-31.980365 31.980365-31.980365l159.901827 0 127.921461 0 159.901827 0c17.662265 0 31.980365 14.3181 31.980365 31.980365C767.54821 305.544905 753.23011 319.863005 735.567845 319.863005z"></path>
      <path d="M447.74558 767.588119c17.662265 0 31.980365-14.3181 31.980365-31.980365L479.725946 479.764831c0-17.662265-14.3181-31.980365-31.980365-31.980365-17.662265 0-31.980365 14.3181-31.980365 31.980365l0 255.842922C415.765215 753.270019 430.083316 767.588119 447.74558 767.588119z"></path>
      <path d="M575.667042 767.588119c17.662265 0 31.980365-14.3181 31.980365-31.980365L607.647407 479.764831c0-17.662265-14.3181-31.980365-31.980365-31.980365-17.662265 0-31.980365 14.3181-31.980365 31.980365l0 255.842922C543.686676 753.270019 558.004777 767.588119 575.667042 767.588119z"></path>
    </svg>
  );
}

/** 复制 */
export const Copy: FC = () => {
  return (
    <svg viewBox="64 64 896 896" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
    </svg>
  )
}

/** 移动 */
export const Move: FC = () => {
  return (
    <svg viewBox="64 64 896 896" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"></path>
    </svg>
  )
}

/** 编辑 */
export const Edit: FC = () => {
  return (
    <svg viewBox="64 64 896 896" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
    </svg>
  )
}

/** 静态文件 */
export const StaticFiles: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="43315" width="16" height="16">
      <path d="M380.05 510.62h63.116v103.353c0 18.976 15.476 34.451 34.451 34.451h68.9c18.976 0 34.452-15.475 34.452-34.45V510.62h62.511c22.203 0 26.644-3.632 7.603-23.012L546.586 383.18c-35.122-34.856-34.651-35.023-69.642 0L372.582 487.608c-19.378 19.38-12.851 23.012 7.468 23.012z" p-id="43316" fill="currentColor"></path>
      <path d="M856.508 219.169H443.099c0-57.059-46.293-103.352-103.352-103.352H167.492c-57.06 0-103.352 46.293-103.352 103.352v585.664c0 57.058 46.293 103.35 103.352 103.35h689.015c57.06 0 103.352-46.292 103.352-103.35v-482.31c0-57.061-46.293-103.354-103.351-103.354z m34.451 585.663c0 19.007-15.442 34.451-34.451 34.451H167.492c-19.008 0-34.448-15.444-34.448-34.45v-482.31c0-19.01 15.44-34.452 34.448-34.452h689.015c19.009 0 34.451 15.442 34.451 34.452v482.31z" p-id="43317" fill="currentColor"></path>
      <path d="M649.804 667.029c0 19.008-15.443 34.45-34.45 34.45H408.65c-19.01 0-34.451-15.442-34.451-34.45v-34.452h-68.903v34.452c0 57.058 46.293 103.352 103.354 103.352h206.703c57.06 0 103.352-46.294 103.352-103.352v-34.452h-68.901v34.452z" p-id="43318" fill="currentColor"></path>
    </svg>
  )
}

/** 个人设置 */
export const Account: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g fill="currentColor">
        <path d="M8 8.5c3.59 0 6.5 2.374 6.5 5.303 0 2.93-13 2.93-13 0C1.5 10.874 4.41 8.5 8 8.5zM8 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill-opacity="0.15"></path>
        <path d="M8 8.5c3.59 0 6.5 2.374 6.5 5.303 0 2.93-13 2.93-13 0 0-2.862 2.78-5.195 6.256-5.3L8 8.5zM8 10c-2.66 0-4.749 1.58-4.979 3.459l-.013.141.055.038c.16.103.401.212.708.315l.192.061c1.03.31 2.497.486 4.037.486s3.007-.176 4.037-.486c.4-.12.707-.252.9-.376l.054-.038-.012-.141c-.223-1.822-2.194-3.363-4.739-3.455L8 10zM8 0a3.5 3.5 0 01.192 6.995L8 7A3.5 3.5 0 017.808.005L8 0zm0 1.5a2 2 0 100 4 2 2 0 000-4z"></path>
      </g>
    </svg>
  )
}

/** 退出登录 */
export const Signout: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5">
        <path stroke-linejoin="round" d="M3.75 5.25v-1.5a2 2 0 012-2h5.5a2 2 0 012 2v8.5a2 2 0 01-2 2h-5.5a2 2 0 01-2-2v-2"></path>
        <g stroke-linecap="round">
          <path d="M1.75 7.75h7"></path>
          <path stroke-linejoin="round" d="M7.25 5.25l2.5 2.5-2.5 2.5"></path>
        </g>
      </g>
    </svg>
  )
}

/** 加载中 */
export const Loading: FC = () => {
  return (
    <span className={css.span}>
      <svg viewBox="0 0 1024 1024" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
  )
}

/** 向右的三角 */
export const CaretRight: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" focusable="false" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
    </svg>
  )
}

/** 分享 */
export const Shared: FC = () => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13647" width="16" height="16">
      <path d="M422.5536 27.0336zM431.8208 25.6a25.6 25.6 0 0 1 4.096 50.8928c-1.024 0.2048-2.56 0.4096-7.5264 1.024H165.4272c-48.64 0-88.6272 42.0864-88.6272 94.6176v680.448c0 52.5312 39.9872 94.6176 88.6272 94.6176H858.624c48.64 0 88.6272-42.0864 88.6272-94.6176V451.584a25.6 25.6 0 0 1 51.2 0v400.9984c0 80.2304-62.3104 145.8176-139.8272 145.8176H165.376C87.9104 998.4 25.6 932.864 25.6 852.5824V172.1344C25.6 91.904 87.9104 26.3168 165.4272 26.3168l259.1744 0.1536A30.4128 30.4128 0 0 1 431.8208 25.6z m531.456 68.5568a24.832 24.832 0 0 1 18.432 29.3376 25.9072 25.9072 0 0 1-6.144 12.8L814.4896 363.008a25.6 25.6 0 0 1-41.7792-29.696l128.256-180.5312C634.5216 204.3904 409.088 423.6288 387.2768 688.128a25.6 25.6 0 0 1-51.0464-4.1984c22.528-273.7152 242.3808-500.8384 510.4128-571.2384l-156.0576-46.6432a25.6 25.6 0 0 1 14.6944-49.0496l257.9968 77.1584zM437.248 76.0832l-0.5632 0.2048a2.816 2.816 0 0 0 0.5632-0.2048z" fill="#333333" p-id="13648"></path>
    </svg>
  )
}

/** 更多（操作省略） */
export const More: FC = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2825">
      <path d="M512 512m-96.7 0a96.7 96.7 0 1 0 193.4 0 96.7 96.7 0 1 0-193.4 0Z" fill="#5A5A68" p-id="2826"></path>
      <path d="M863 512m-96.7 0a96.7 96.7 0 1 0 193.4 0 96.7 96.7 0 1 0-193.4 0Z" fill="#5A5A68" p-id="2827"></path>
      <path d="M161 512m-96.7 0a96.7 96.7 0 1 0 193.4 0 96.7 96.7 0 1 0-193.4 0Z" fill="#5A5A68" p-id="2828"></path>
    </svg>
  )
}

/** 图标通用 */
export const Icon: FC<{ icon: string | ReactNode }> = ({ icon }) => {
  return typeof icon === "string" ? (
    <img src={icon}/>
  ) : icon
}
