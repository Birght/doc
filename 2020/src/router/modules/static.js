import Layout from '@/layout'
export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-platform'
    },
    component: Layout
  },
  {
    path: '/static',
    redirect: '/doc',
    meta: {
      title: '综合',
      icon: 'el-icon-s-platform'
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '主页',
          icon: 'el-icon-menu'
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/doc',
        name: 'doc',
        meta: {
          title: '文档',
          icon: 'el-icon-thumb'
        },
        component: () => import('@/views/demo/doc')
      },
      {
        path: '/unit',
        name: 'unit',
        meta: {
          title: '统计',
          icon: 'el-icon-s-data'
        },
        component: () => import('@/views/demo/svgdemo.vue')
      }
    ]
  }
]
