import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/client_feedback',
    name: 'СlientFeedback',
    component: () => import('../views/СlientFeedback.vue')
  },
  {
    path: '/cars',
    name: 'VehicleFleet',
    component: () => import('../views/VehicleFleet.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('../views/Car.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: () => import('../components/Ui/MyModal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
