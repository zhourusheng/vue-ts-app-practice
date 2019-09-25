export default [
  {
    path: '/',
    name: 'entry',
    component: () => import('@/views/entry/index.vue')
  },
  {
    path: '/mask',
    name: 'mask',
    component: () => import('@/views/mask/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form/index.vue')
  },
  {
    path: '/info-list',
    name: 'info-list',
    component: () => import('@/views/infoList/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo/index.vue')
  }
]
