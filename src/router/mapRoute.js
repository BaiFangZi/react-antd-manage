// import Dashboard from '../dashboard'
// import RichEditor from '@/pages/component-demos/richEditor'
// import MarkDown from '@/pages/component-demos/markdown'

import Loadable from 'react-loadable'
import Loading from '@/component/Loading'
export const mainRoute = [
  {
    path: '/dashboard',
    component: Loadable({
      loader: () => import('@/pages/dashboard'),
      loading: Loading,
    }),
  },
  {
    path: '/component-demos/draggable',
    component: Loadable({
      loader: () => import('@/pages/component-demos/draggable'),
      loading: Loading,
    }),
  },
  {
    path: '/component-demos/markdown',
    component: Loadable({
      loader: () => import('@/pages/component-demos/markdown'),
      loading: Loading,
    }),
  },
  {
    path: '/component-demos/richEditor',
    component: Loadable({
      loader: () => import('@/pages/component-demos/richEditor'),
      loading: Loading,
    }),
  },
  {
    path: '/chart/keyboard',
    component: Loadable({
      loader: () => import('@/pages/chart/keyboard'),
      loading: Loading,
    }),
  },
  {
    path: '/chart/line',
    component: Loadable({
      loader: () => import('@/pages/chart/line'),
      loading: Loading,
    }),
  },
  {
    path: '/chart/mixChart',
    component: Loadable({
      loader: () => import('@/pages/chart/mixChart'),
      loading: Loading,
    }),
  },

  {
    path: '/nestMenu',
    component: Loadable({
      loader: () => import('@/pages/nestMenu'),
      loading: Loading,
    }),
    routes: [
      {
        path: '/nestMenu/level1_1',
        component: Loadable({
          loader: () => import('@/pages/nestMenu/level1_1'),
          loading: Loading,
        }),
      },
      {
        path: '/nestMenu/level1_2/level1_2_1',
        component: Loadable({
          loader: () => import('@/pages/nestMenu/level1_2/level1_2_1'),
          loading: Loading,
        }),
      },
      {
        path: '/nestMenu/level1_2/level1_2_2',
        component: Loadable({
          loader: () => import('@/pages/nestMenu/level1_2/level1_2_2'),
          loading: Loading,
        }),
      },
    ],
  },
  {
    path: '/table',
    component: Loadable({
      loader: () => import('@/pages/table'),
      loading: Loading,
    }),
  },
  {
    path: '/exportExcel',
    component: Loadable({
      loader: () => import('@/pages/excel/exportExcel'),
      loading: Loading,
    }),
  },
  {
    path: '/uploadExcel',
    component: Loadable({
      loader: () => import('@/pages/excel/uploadExcel'),
      loading: Loading,
    }),
  },
  {
    path: '/zip',
    component: Loadable({
      loader: () => import('@/pages/zip'),
      loading: Loading,
    }),
  },
  {
    path: '/auth',
    component: Loadable({
      loader: () => import('@/pages/auth'),
      loading: Loading,
    }),
    routes: [
      {
        path: '/auth/admin',
        component: Loadable({
          loader: () => import('@/pages/auth/admin'),
          loading: Loading,
        }),
      },
      {
        path: '/auth/custome',
        component: Loadable({
          loader: () => import('@/pages/auth/custome'),
          loading: Loading,
        }),
      },
      {
        path: '/auth/authBtn',
        component: Loadable({
          loader: () => import('@/pages/auth/authBtn'),
          loading: Loading,
        }),
      },
    ],
  },

  {
    path: '/about',
    component: Loadable({
      loader: () => import('@/pages/about'),
      loading: Loading,
    }),
  },
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
//       loading: Loading,
//     }),
//   },
// ]
