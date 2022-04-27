import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */'../views/Index.vue')
const Cataloge = () => import(/* webpackChunkName: "cataloge" */'../views/Cataloge.vue')
const Register = () => import(/* webpackChunkName: "register" */'../views/Register.vue')

// const Box = () => import(/* webpackChunkName: "art" */'../views/Box.vue')
// const BoxOpen = () => import(/* webpackChunkName: "art" */'../views/BoxOpen.vue')
const Art = () => import(/* webpackChunkName: "art" */'../views/Art.vue')

const Create = () => import(/* webpackChunkName: "create" */'../views/Create.vue')
const CreateSingle = () => import(/* webpackChunkName: "createSingle" */'../views/CreateSingle.vue')
const CreateMultiple = () => import(/* webpackChunkName: "createMultiple" */'../views/CreateMultiple.vue')
// const CreateGenerative = () => import(/* webpackChunkName: "CreateGenerative" */'../views/CreateGenerative.vue')

const Settings = () => import(/* webpackChunkName: "user" */'../views/Settings.vue')
const User = () => import(/* webpackChunkName: "user" */'../views/User.vue')
const UserUnlogged = () => import(/* webpackChunkName: "user" */'../views/UserUnlogged.vue')

function userRoute(to){
  if(to.params.username === 'null'){
    router.push({name: 'UserUnlogged'})
  }
}

function LogAccountOrConnectWallet(){
  if(localStorage.getItem('walletConnected') === 'true'){
    router.push({name: 'Register'})
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
    path: '/cataloge',
    name: 'Cataloge',
    component: Cataloge
  },
  // {
  //   path: '/box/:itemId(\\d+)',
  //   name: 'Box',
  //   component: Box
  // },
  // {
  //   path: '/box/:itemId(\\d+)/open',
  //   name: 'BoxOpen',
  //   component: BoxOpen
  // },
  {
    path: '/art/:itemId(\\d+)',
    name: 'Art',
    component: Art
  },
  // {
  //   path: '/create/generative',
  //   name: 'CreateGenerative',
  //   component: CreateGenerative
  // },
  {
    path: '/create/single',
    name: 'CreateSingle',
    component: CreateSingle
  },
  {
    path: '/create/multiple',
    name: 'CreateMultiple',
    component: CreateMultiple
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/user/unlogged',
    name: 'UserUnlogged',
    component: UserUnlogged,
    beforeEnter: LogAccountOrConnectWallet,
    beforeRouteUpdate: LogAccountOrConnectWallet,
  },
  {
    path: '/user/:username',
    name: 'User',
    component: User,
    props: true,
    beforeEnter: userRoute,
    beforeRouteUpdate: userRoute,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  // leave this last to catch unmatched routes
  {
    path: '/:catchAll(.*)*',
    component: Index,
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