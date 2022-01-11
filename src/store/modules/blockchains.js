// import axios from 'axios';

// axios.get('https://onlineocean-15690-default-rtdb.europe-west1.firebasedatabase.app/')
//   .then(function (response) {
//     state.allBlockchains = response
//   })

const state = {
  allBlockchains:[
    // {
    //   label: 'Ethereum',
    //   value: 'eth',
    //   image: require('@/assets/images/blockchain-ethereum.svg')
    // },
    {
      label: 'Near',
      value: 'near',
      image: require('@/assets/images/blockchain-near-dark.svg'),
      imageDark: require('@/assets/images/blockchain-near.svg')
    },
    {
      label: 'Immutable X',
      value: 'imux',
      image: require('@/assets/images/blockchain-immux.svg'),
    },
    // {
    //   label: 'BSC',
    //   value: 'bsc',
    //   image: require('@/assets/images/blockchain-bsc.png'),
    // },
    // {
    //   label: 'Polygon',
    //   value: 'polygon',
    //   image: require('@/assets/images/blockchain-polygon.svg')
    // },
    // {
    //   label: 'Solana',
    //   value: 'solana',
    //   image: require('@/assets/images/blockchain-solana.svg')
    // },
    // {
    //   label: 'Dfinity',
    //   value: 'dfinity',
    //   image: require('@/assets/images/blockchain-dfinity.png')
    // },
  ],
  currentBlockchain:{
    label: 'Near',
    value: 'near',
    image: require('@/assets/images/blockchain-near.svg'),
    imageDark: require('@/assets/images/blockchain-near-dark.svg')
  },
  allWallets:[
    {
      label: 'Near wallet',
      value: 'nearwallet',
      image: require('@/assets/images/temp/near--light-theme.svg'),
      darkImage: require('@/assets/images/temp/near.svg'),
    },
    {
      label: 'MetaMask',
      value: 'metamask',
      image: require('@/assets/images/wallet-metamask.png')
    },
  ],
  currentWallet:{
    label: 'Near wallet',
    value: 'nearwallet',
    image: require('@/assets/images/temp/near--light-theme.svg'),
    darkImage: require('@/assets/images/temp/near.svg'),
  },
  openedWallets: false,
  openedNots: false,
  openedBlockchains: false,
};

const getters = {
  allBlockchains: state => state.allBlockchains,
  allWallets: state => state.allWallets,
  currentBlockchain: state => state.currentBlockchain,
  currentWallet: state => state.currentWallet,

  openedWallets: state => state.openedWallets,
  openedBlockchains: state => state.openedBlockchains,
  openedNots: state => state.openedNots,
};

const mutations = {
  setNewBlockchain(state, payload){
    state.currentBlockchain = payload
    // axios.post('https://onlineocean-15690-default-rtdb.europe-west1.firebasedatabase.app', state.currentBlockchain)
    //   .then(function () {
    //     return null
    //   })
  },
  togglePopUpWallets(state){
    state.openedNots = false
    state.openedBlockchains = false
    state.openedWallets = !state.openedWallets
  },
  togglePopUpBlockchains(state){
    state.openedNots = false
    state.openedWallets = false
    state.openedBlockchains = !state.openedBlockchains
  },
  togglePopUpNots(state){
    state.openedBlockchains = false
    state.openedWallets = false
    state.openedNots = !state.openedNots
  }
};

export default {
  state,
  getters,
  mutations,
};