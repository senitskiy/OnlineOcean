// import axios from 'axios';

import router from '@/router'

const state = {
  user:{
    username: 'null',
    logged: false,
  },
  wallet: {
    id: '',
    connected: false,
  },
};

if(localStorage.getItem('userLogged') === 'true'){
  state.user.logged = true
  state.user.username = localStorage.getItem('userUsername')
}

if(localStorage.getItem('walletConnected') === 'true'){
  state.wallet.id = localStorage.getItem('wallet')
  state.wallet.connected = localStorage.getItem('walletConnected')
}


const getters = {
  userInfo: state => state.user,
  userLogged: state => state.user.logged,
  walletConnected: state => state.wallet.connected,
  wallet: state => state.wallet.id,
};

const mutations = {
  changeUserInfo(state){
    // Раскоментировать
    // axios.post('/user/' + state.user.username, state.user)
    //   .then(function () {
    //     localStorage.setItem('userLogged', true)
    //     localStorage.setItem('userUsername', state.user.username)
    //   })

    // Убрать
    localStorage.setItem('userLogged', true)
    localStorage.setItem('userUsername', state.user.username)
  },

  connectWallet(state){
    state.wallet.id = '4b73hghjk4ljh2jk3hy956'
    state.wallet.connected = true
    localStorage.setItem('wallet', state.wallet.id)
    localStorage.setItem('walletConnected', state.wallet.connected)

    router.push({ name: 'Register' })
  },
  quitWallet(state){
    state.wallet.id = ''
    state.wallet.connected = false
    localStorage.setItem('wallet', state.wallet.id)
    localStorage.setItem('walletConnected', state.wallet.connected)
  },

  logUser(state, payload){
    state.user = payload

    state.user.logged = true
    state.user.username = 'artstudio'
    this.commit('changeUserInfo')

    router.push({ name: 'User', params: { username: state.user.username }})
  },
  unlogUser(state){
    state.user.logged = false
    state.user.username = 'null'
    localStorage.setItem('userLogged', false)
    localStorage.setItem('userUsername', state.user.username)

    state.wallet.id = ''
    state.wallet.connected = false
    localStorage.setItem('wallet', state.wallet.id)
    localStorage.setItem('walletConnected', state.wallet.connected)

    router.push({ name: 'Index'})
  },
};

export default {
  state,
  getters,
  mutations,
};