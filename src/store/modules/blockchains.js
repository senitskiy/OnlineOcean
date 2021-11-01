// import axios from 'axios';

// axios.get('https://onlineocean-15690-default-rtdb.europe-west1.firebasedatabase.app/')
//   .then(function (response) {
//     state.allBlockchains = response
//   })

const state = {
  allBlockchains:[
    {
      label: 'Ethereum',
      value: 'eth',
      image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
    },
    {
      label: 'Immutable X',
      value: 'imux',
      image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
    },
    {
      label: 'BSC',
      value: 'bsc',
      image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
    },
    {
      label: 'Polygon',
      value: 'polygon',
      image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
    },
    {
      label: 'Solana',
      value: 'solana',
      image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
    },
    {
      label: 'Dfinity',
      value: 'dfinity',
      image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
    },
  ],
  currentBlockchain:{
    value: 'eth',
    label: 'Ethereum',
  },
};

const getters = {
  allBlockchains: state => state.allBlockchains,
  currentBlockchain: state => state.currentBlockchain,
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