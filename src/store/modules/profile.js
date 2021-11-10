// import axios from 'axios';

// axios
//   .get('https://google.com')
//   .then(function(response){
//     state.user = response
//     
//   })

const state = {
  user:{
    token: '',
    connected: false,
    nickname: 'ArtStudio_nft',
    username: 'artstudio',
    allItems: [],
    itemLength: 0,
    boxLength: 0,
    image: 'https://i.ibb.co/TwJzdGg/user-ultra-big.jpg',
    id: 34,
    cover: 'https://i.ibb.co/KjyXtpS/product-banner.jpg',
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
    localStorage.getItem('userConnected', state.user.connected)
    localStorage.getItem('userUsername', state.user.username)
    console.log([13, localStorage.getItem('userConnected')])
  },
  connectWallet(state){
    state.user.token = '4b73hghjk4ljh2jk3hy956'
    state.user.connected = true
    state.user.allItems = [34, 34, 2, 4, 5, 3, 6, 3]
    state.user.itemLength = 134,
    state.user.boxLength = 134,
    this.commit('changeUserInfo')
  }
};

export default {
  state,
  getters,
  mutations,
};