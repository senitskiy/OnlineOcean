import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Cataloge from '../views/Cataloge.vue'
import Box from '../views/Box.vue'
import Art from '../views/Art.vue'
import Create from '../views/Create.vue'
import CreateSomething from '../views/CreateSomething.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/cataloge',
    name: 'Cataloge',
    component: Cataloge
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
  {
    path: '/create/',
    name: 'Create',
    component: Create
  },
  {
    path: '/create/box',
    name: 'CreateSomething',
    component: CreateSomething
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
