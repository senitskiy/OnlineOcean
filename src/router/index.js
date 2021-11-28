import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Cataloge from '../views/Cataloge.vue'
import Register from '../views/Register.vue'
import Settings from '../views/Settings.vue'
import Box from '../views/Box.vue'
import BoxOpen from '../views/BoxOpen.vue'
import Art from '../views/Art.vue'
import Create from '../views/Create.vue'
import CreateSomething from '../views/CreateSomething.vue'
import User from '../views/User.vue'
import UserUnlogged from '../views/UserUnlogged.vue'

// let prevUserRouteParams = null

function userRoute(to){
  if(to.params.username === 'null'){
    to.params.userConnected = false
    to.params.userOwn = true
    router.push({name: 'UserUnlogged'})
  }else if(to.params.username === localStorage.getItem('userUsername') && JSON.parse(localStorage.getItem('userConnected')) === true){
    to.params.userConnected = true
    to.params.userOwn = true
  }else{
    to.params.userConnected = false
    to.params.userOwn = false
  }
}

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
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
    path: '/user/unlogged',
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
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  },
})

export default router