import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Box from '../views/Box.vue'
import Art from '../views/Art.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/box/:itemId(\\d+)',
    name: 'Box',
    component: Box
  },
  {
    path: '/art/:itemId(\\d+)',
    name: 'Art',
    component: Art
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
