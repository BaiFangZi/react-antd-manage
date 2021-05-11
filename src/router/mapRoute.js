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
  },
  {
    path: '/table',
    component: Loadable({
      loader: () => import('@/pages/table'),
      loading: Loading,
    }),
  },
]

export const nestMenu = [
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
]
