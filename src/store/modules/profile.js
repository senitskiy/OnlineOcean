// import axios from 'axios';

// axios
//   .get('https://google.com')
//   .then(function(response){
//     state.user = response
    
//   })

import router from '@/router'

const state = {
  user:{
    token: '',
    connected: false,
    username: 'null',
  }
};

localStorage.setItem('userConnected', state.user.connected)
localStorage.setItem('userUsername', state.user.username)

const getters = {
  userInfo: state => state.user,
};

const mutations = {
  changeUserInfo(state){
    // axios.post('/user', state.user)
    //   .then(function () {
    //     return null
    //   })
    localStorage.setItem('userConnected', true)
    localStorage.setItem('userUsername', state.user.username)
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

    // router.push({name: 'Index'})
    router.push({ name: 'User', params: { username: state.user.username }})
  }
};

export default {
  state,
  getters,
  mutations,
};