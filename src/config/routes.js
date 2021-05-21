import Loadable from 'react-loadable'
import Loading from '@/component/Loading'
export const routes = [
  {
    text: '首页',
    path: '/dashboard',
    roles: ['custome', 'admin'],
    // component: '@/pages/dashboard',
    component: Loadable({
      loader: () => import('@/pages/dashboard'),
      loading: Loading,
    }),
  },
  {
    text: '组件',
    path: '/component-demos',
    roles: ['custome', 'admin'],
    component: Loadable({
      loader: () => import('@/pages/component-demos'),
      loading: Loading,
    }),
    routes: [
      // {
      //   text: '拖拽列表',
      //   path: '/component-demos/draggable',
      //   component: Loadable({
      //     loader: () => import('@/pages/component-demos/draggable'),
      //     loading: Loading,
      //   }),
      // },
      {
        text: 'MarkDown',
        roles: ['custome', 'admin'],

        path: '/component-demos/markdown',
        component: Loadable({
          loader: () => import('@/pages/component-demos/markdown'),
          loading: Loading,
        }),
      },
      {
        text: '富文本编辑器',
        roles: ['custome', 'admin'],

        path: '/component-demos/richEditor',
        component: Loadable({
          loader: () => import('@/pages/component-demos/richEditor'),
          loading: Loading,
        }),
      },
    ],
  },
  // {
  //   text: '图表',
  // roles: ['custome', 'admin'],
  //
  // path: '/chart',
  //   component: Loadable({
  //     loader: () => import('@/pages/chart'),
  //     loading: Loading,
  //   }),
  //   routes: [
  //     {
  //       text: '键盘图表',
  // roles: ['custome', 'admin'],
  //
  // path: '/chart/keyboard',
  //       component: Loadable({
  //         loader: () => import('@/pages/chart/keyboard'),
  //         loading: Loading,
  //       }),
  //     },
  //     {
  //       text: '折线图',
  // roles: ['custome', 'admin'],
  //
  // path: '/chart/line',
  //       component: Loadable({
  //         loader: () => import('@/pages/chart/line'),
  //         loading: Loading,
  //       }),
  //     },
  //     {
  //       text: '混合图表',
  // roles: ['custome', 'admin'],
  //
  // path: '/chart/mixChart',
  //       component: Loadable({
  //         loader: () => import('@/pages/chart/mixChart'),
  //         loading: Loading,
  //       }),
  //     },
  //   ],
  // },

  {
    text: '嵌套菜单',
    roles: ['custome', 'admin'],

    path: '/nestMenu',
    component: Loadable({
      loader: () => import('@/pages/nestMenu'),
      loading: Loading,
    }),
    routes: [
      {
        text: '层级1-1',
        roles: ['custome', 'admin'],

        path: '/nestMenu/level1_1',
        component: Loadable({
          loader: () => import('@/pages/nestMenu/level1_1'),
          loading: Loading,
        }),
      },

      {
        text: '层级1-2',
        roles: ['custome', 'admin'],
        path: '/nestMenu/level1_2',
        component: Loadable({
          loader: () => import('@/pages/nestMenu/level1_2'),
          loading: Loading,
        }),
        routes: [
          {
            text: '层级1-2-1',
            roles: ['custome', 'admin'],

            path: '/nestMenu/level1_2/level1_2_1',
            component: Loadable({
              loader: () => import('@/pages/nestMenu/level1_2/level1_2_1'),
              loading: Loading,
            }),
          },
          {
            text: '层级1-2-2',
            roles: ['custome', 'admin'],

            path: '/nestMenu/level1_2/level1_2_2',
            component: Loadable({
              loader: () => import('@/pages/nestMenu/level1_2/level1_2_2'),
              loading: Loading,
            }),
          },
        ],
      },
    ],
  },
  {
    text: '综合表格',
    roles: ['custome', 'admin'],

    path: '/table',
    component: Loadable({
      loader: () => import('@/pages/table'),
      loading: Loading,
    }),
  },
  {
    text: 'Excel',
    roles: ['custome', 'admin'],

    path: '/excel',
    component: Loadable({
      loader: () => import('@/pages/excel'),
      loading: Loading,
    }),
    routes: [
      {
        text: '导出Excel',
        roles: ['custome', 'admin'],

        path: '/excel/exportExcel',
        component: Loadable({
          loader: () => import('@/pages/excel/exportExcel'),
          loading: Loading,
        }),
      },
      {
        text: '上传Excel',
        roles: ['custome', 'admin'],

        path: '/excel/uploadExcel',
        component: Loadable({
          loader: () => import('@/pages/excel/uploadExcel'),
          loading: Loading,
        }),
      },
    ],
  },
  {
    text: 'Zip',
    roles: ['custome', 'admin'],

    path: '/zip',
    component: Loadable({
      loader: () => import('@/pages/zip'),
      loading: Loading,
    }),
  },
  {
    text: '权限管理',
    roles: ['custome', 'admin'],

    path: '/auth',
    component: Loadable({
      loader: () => import('@/pages/auth'),
      loading: Loading,
    }),
    routes: [
      {
        text: '管理员',
        roles: ['admin'],

        path: '/auth/admin',
        component: Loadable({
          loader: () => import('@/pages/auth/admin'),
          loading: Loading,
        }),
      },
      {
        text: '普通用户',
        roles: ['custome', 'admin'],

        path: '/auth/custome',
        component: Loadable({
          loader: () => import('@/pages/auth/custome'),
          loading: Loading,
        }),
      },
      {
        text: '按钮权限',
        roles: ['custome', 'admin'],

        path: '/auth/authBtn',
        component: Loadable({
          loader: () => import('@/pages/auth/authBtn'),
          loading: Loading,
        }),
      },
    ],
  },
  {
    text: '个人中心',
    roles: ['custome', 'admin'],
    path: '/userCenter',
    hidden: true,
    component: Loadable({
      loader: () => import('@/pages/userCenter'),
      loading: Loading,
    }),
  },
  {
    text: '系统设置',
    roles: ['custome', 'admin'],
    path: '/sysSetting',
    hidden: true,
    component: Loadable({
      loader: () => import('@/pages/sysSetting'),
      loading: Loading,
    }),
  },

  {
    text: '关于',
    roles: ['custome', 'admin'],
    path: '/about',
    component: Loadable({
      loader: () => import('@/pages/about'),
      loading: Loading,
    }),
  },
  // {
  //   text: '404',
  //   hidden: true,
  //   roles: ['custome', 'admin'],
  //   path: '.error/404',
  //   component: Loadable({
  //     loader: () => import('@/pages/error/404'),
  //     loading: Loading,
  //   }),
  // },
]

// export const nestMenu = [
//   {
//     path: '/nestMenu/level1_1',
//     component: Loadable({
//       loader: () => import('@/pages/nestMenu/level1_1'),
//       loading: Loading,
//     }),
//   },
//   {
//     path: '/nestMenu/level1_2/level1_2_1',
//     component: Loadable({
//       loader: () => import('@/pages/nestMenu/level1_2/level1_2_1'),
//       loading: Loading,
//     }),
//   },
//   {
//     path: '/nestMenu/level1_2/level1_2_2',
//     component: Loadable({
//       loader: () => import('@/pages/nestMenu/level1_2/level1_2_2'),
//       loading: Loadiimport { routes } from './../router/index';

//     }),
//   },
// ]
