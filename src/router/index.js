import { createRouter, createWebHistory } from 'vue-router'
import LendingView from '../views/LendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lending',
      component: LendingView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import('../views/DocView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    //Dashboard page
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/dashboardViews/HomeView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/dashboardViews/ProfileView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/dashboardViews/MapView.vue')
    }
  ]
})

export default router
