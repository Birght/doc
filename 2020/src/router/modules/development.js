export default [
  {
    path: '/video',
    name: 'video',
    meta: {
      title: '视频列表',
      icon: 'el-icon-thumb'
    },
    component: () => import('@/views/home')
  },
  {
    path: '/statistics',
    name: 'statistics',
    meta: {
      title: '统计',
      icon: 'el-icon-s-data'
    },
    component: () => import('@/views/demo/svgdemo.vue')
  }
]
