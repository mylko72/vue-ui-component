import { createRouter, createWebHistory } from 'vue-router'
import TabView from '@/views/TabView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TabView,
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../views/TabView.vue'),
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/AccordionView.vue'),
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import('../views/PopupView.vue'),
    },
  ],
})

export default router
