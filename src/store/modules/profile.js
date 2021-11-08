// import axios from 'axios';

const state = {
  userToken: '',
};

const getters = {
  userToken: state => state.userToken,
  userLogged: state => state.userToken.length > 0
};

const mutations = {
  connectWallet(state){
    state.userToken = '4b73hghjk4ljh2jk3hy956'
    // axios.post('https://onlineocean-15690-default-rtdb.europe-west1.firebasedatabase.app', state.currentBlockchain)
    //   .then(function () {
    //     return null
    //   })
  }
};

export default {
  state,
  getters,
  mutations,
};