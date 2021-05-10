// import Dashboard from '../dashboard'
// import RichEditor from '@/pages/component-demos/richEditor'
// import MarkDown from '@/pages/component-demos/markdown'

import Loadable from 'react-loadable'
import Loading from '@/component/Loading'
export default [
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
]
