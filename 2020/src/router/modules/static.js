import Layout from '@/layout'
export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-platform'
    },
    component: () => import('@/views/home')
  },
  {
    path: '/comnpoents',
    name: 'comnpoents',
    meta: {
      title: '组件',
      icon: 'el-icon-menu'
    },
    component: Layout,
    children: [
      {
        path: '/demo/svg',
        name: 'svg',
        meta: {
          title: '图标展示',
          icon: 'el-icon-menu'
        },
        component: () => import('@/views/demo/svgdemo.vue')
      }
    ]
  }
]
