// import axios from 'axios';

import router from '@/router'

const state = {
  user:{
    token: '',
    connected: false,
    username: 'null',
  }
};

if(localStorage.getItem('userConnected') === 'true'){
  state.user.connected = true
  state.user.username = localStorage.getItem('userUsername')
  state.user.token = localStorage.getItem('userToken')
}else{
  localStorage.setItem('userConnected', state.user.connected)
  localStorage.setItem('userUsername', state.user.username)
}

const getters = {
  userInfo: state => state.user,
};

const mutations = {
  changeUserInfo(state){
    // Раскоментировать
    // axios.post('/user/' + state.user.username, state.user)
    //   .then(function () {
    //     localStorage.setItem('userConnected', true)
    //     localStorage.setItem('userUsername', state.user.username)
    //     localStorage.setItem('userToken', state.user.token)
    //   })

    // Убрать
    localStorage.setItem('userConnected', true)
    localStorage.setItem('userUsername', state.user.username)
    localStorage.setItem('userToken', state.user.token)
  },
  connectWallet(){
    router.push({name: 'Register'})
  },
  userLogged(state, payload){
    state.user = payload

    state.user.token = '4b73hghjk4ljh2jk3hy956'
    state.user.connected = true
    state.user.username = 'artstudio'
    this.commit('changeUserInfo')

    router.push({ name: 'User', params: { username: state.user.username }})
  },
  signOutWallet(state){
    state.user.token = ''
    state.user.connected = false
    state.user.username = 'null'

    localStorage.setItem('userConnected', false)
    localStorage.setItem('userUsername', state.user.username)
    localStorage.setItem('userToken', state.user.token)

    router.push({ name: 'Index'})
  },
};

export default {
  state,
  getters,
  mutations,
};