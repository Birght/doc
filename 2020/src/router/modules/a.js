export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/demo/svg',
    name: 'svg',
    meta: {
      title: '图标展示',
      icon: 'dashboard'
    },
    component: () => import('@/views/demo/svgdemo.vue')
  }
]
