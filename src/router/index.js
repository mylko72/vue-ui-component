import { createRouter, createWebHistory } from 'vue-router'

// API 모드 플래그: options | composition
const apiMode = import.meta.env.VITE_API_MODE || 'options'

// 동적 import 분기 함수
const resolveView = (name) => {
  return apiMode === 'options'
    ? () => import(`../views/${name}.options.vue`)
    : () => import(`../views/${name}.composition.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolveView('TabView'),
    },
    {
      path: '/tab',
      name: 'tab',
      component: resolveView('TabView'),
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: resolveView('AccordionView'),
    },
    {
      path: '/popup',
      name: 'popup',
      component: resolveView('PopupView'),
    },
  ],
})

export default router
