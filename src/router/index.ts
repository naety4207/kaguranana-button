import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/editor',
    component: () => import('../views/VoiceEditor.vue')
  },
  {
    path: '/search',
    component: () => import('../views/MemesSearch.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, _from, savedPosition) {
    if (savedPosition && to.path !== '/search') {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
