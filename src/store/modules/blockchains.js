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
      image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
    },
    {
      label: 'Immutable X',
      value: 'imux',
      image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
    },
    {
      label: 'BSC',
      value: 'bsc',
      image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
    },
    {
      label: 'Polygon',
      value: 'polygon',
      image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
    },
    {
      label: 'Solana',
      value: 'solana',
      image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
    },
    {
      label: 'Dfinity',
      value: 'dfinity',
      image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
    },
  ],
  currentBlockchain:{
    value: 'eth',
    label: 'Ethereum',
    image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
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