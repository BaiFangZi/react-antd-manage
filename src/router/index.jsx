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
  {
    path: '/chart',
    text: '图表',
    children: [
      {
        path: '/chart/keyboard',
        text: '键盘图表',
      },
      {
        path: '/chart/line',
        text: '折线图',
      },
      {
        path: '/chart/mixChart',
        text: '混合图表',
      },
    ],
  },
  {
    path: '/auth',
    text: '权限管理',
    children: [
      { path: '/auth/admin', text: '管理员' },
      {
        path: '/auth/custome',
        text: '普通用户',
      },
      {
        path: '/auth/authBtn',
        text: '权限按钮',
      },
    ],
  },
  {
    path: '/nestMenu',
    text: '嵌套菜单',
    children: [
      {
        path: '/nestMenu/level1_1',
        text: '层级level1_1',
      },
      {
        path: '/nestMenu/level1_2',
        text: '层级level1_2',
        children: [
          {
            path: '/nestMenu/level1_2/level1_2_1',
            text: '层级level1_2_1',
          },
          {
            path: '/nestMenu/level1_2/level1_2_2',
            text: '层级level1_2_2',
          },
        ],
      },
    ],
  },
  {
    path: '/table',
    text: '综合表格',
  },
  {
    path: '/excel',
    text: 'Excel',
    children: [
      {
        path: '/exportExcel',
        text: '导出Excel',
      },
      {
        path: '/uploadExcel',
        text: '上传Excel',
      },
    ],
  },
  {
    path: '/zip',
    text: 'Zip',
  },
  {
    path: '/about',
    text: '关于',
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
