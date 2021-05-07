// import Category from '../category'
// import Dashboard from '../dashboard'
// import Product from '../product'
// import Chart from '../chart'

export const routes = [
  {
    // name: 'dashboard',
    path: '/dashboard',
    text: '首页',
    component: () => import('@/pages/dashboard'),
  },
  {
    // name: 'category',
    path: '/component-demos',
    text: '组件',
    // component: () => import('@/pages/component-demos'),
    children: [
      {
        path: '/component-demos/richEditor',
        text: '富文本编辑器',
        // component: () => import('@/pages/component-demos/richEditor'),
      },
      {
        path: '/component-demos/markdown',
        text: 'MarkDown',
        // component: () => import('@/pages/component-demos/markdown'),
      },
      {
        path: '/component-demos/draggable',
        text: '拖拽列表',
        // component: () => import('@/pages/component-demos/draggable'),
      },
    ],
  },
  // {
  //   // name: 'product',
  //   path: '/product',
  //   text: '产品',
  //   component: () => import('../pages/product'),
  // },
  // {
  //   // name: 'chart',
  //   path: '/chart',
  //   text: '图表',
  //   component: () => import('../pages/chart'),
  //   children: [
  //     {
  //       // name: '图表1',
  //       path: '/chart/chart1',
  //       text: '图表1',
  //       component: () => import('../pages/chart/chart1'),
  //     },
  //   ],
  // },
]
