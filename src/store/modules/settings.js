// import axios from 'axios';

// axios.get('https://onlineocean-15690-default-rtdb.europe-west1.firebasedatabase.app/')
//   .then(function (response) {
//     state.currentBlockchain = response
//   })

const state = {
  currentBlockchain:{
    value: 'eth',
    name: 'Ethereum',
  },
};

const getters = {
  currentBlockchain: state => state.currentBlockchain 
};

const mutations = {
  setNewBlockchain(state, payload){
    state.currentBlockchain = payload
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