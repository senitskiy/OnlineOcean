import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Cataloge from '../views/Cataloge.vue'
import Box from '../views/Box.vue'
import BoxOpen from '../views/BoxOpen.vue'
import Art from '../views/Art.vue'
import Create from '../views/Create.vue'
import CreateSomething from '../views/CreateSomething.vue'
import User from '../views/User.vue'
import UserUnlogged from '../views/UserUnlogged.vue'

function userRoute(from, to){
  console.log(from, to)
  if(to.params.username === localStorage.getItem('userUsername') && JSON.parse(localStorage.getItem('userConnected')) === true){
    to.params.connected = true
    to.params.own = true
  }else if(to.params.username === localStorage.getItem('userUsername') && JSON.parse(localStorage.getItem('userConnected')) === false){
    to.params.connected = false
    to.params.own = true
    router.push(to.href + '/unlogged')
  }else{
    to.params.connected = false
    to.params.own = false
  }
}

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
    path: '/box/:itemId(\\d+)/open',
    name: 'BoxOpen',
    component: BoxOpen
  },
  {
    path: '/art/:itemId(\\d+)',
    name: 'Art',
    component: Art
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/create/box',
    name: 'CreateSomething',
    component: CreateSomething
  },
  {
    path: '/user/:username/unlogged',
    name: 'UserUnlogged',
    component: UserUnlogged
  },
  {
    path: '/user/:username',
    name: 'User',
    component: User,
    props: true,
    beforeEnter: userRoute,
    beforeRouteUpdate: userRoute,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router