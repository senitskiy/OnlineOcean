// import axios from 'axios';

import * as nearAPI from "near-api-js"

import router from '@/router'

const { connect, keyStores, WalletConnection } = nearAPI;

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const state = {
  user:{
    username: 'null',
    logged: false,
    descr: '',
    logo: {
      src: '',
    },
    cover: {
      src: '',
    },
    socials:[
      {
        href: '',
        type: 'twitter',
      },
      {
        href: '',
        type: 'instagram',
      },
      {
        href: '',
        type: 'telegram',
      },
      {
        href: '',
        type: 'facebook',
      },
    ],
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

  async connectWallet(state){

    console.log('state id: %o', state.wallet.id);
    console.log('state id: %o', state.wallet.walletConnected);

    // connect to NEAR
    const near = await connect(config);

    // create wallet connection
    const wallet = new WalletConnection(near, 'OnlineOcean');

    // redirects user to wallet to authorize your dApp
    // this creates an access key that will be stored in the browser's local storage
    // access key can then be used to connect to NEAR and sign transactions via keyStore

    const signIn = () => {
      wallet.requestSignIn(
        "totalbanjo_buyer.testnet", // contract requesting access
        "dev-1642413213650-29062548325851",
        "OnlineOcean", // optional
        "http://localhost:8080/OnlineOcean/", // optional /success
        "http://localhost:8080/OnlineOcean/" // optional /failure
      );
    };

    signIn();
    
  },

  async quitWallet(state){

    // connect to NEAR
    const near = await connect(config);

    // create wallet connection
    const wallet = new WalletConnection(near);

    const signOut = () => {
      wallet.signOut();
    };

    signOut();

    state.wallet.id = ''
    state.wallet.connected = false
    localStorage.setItem('wallet', state.wallet.id)
    localStorage.setItem('walletConnected', state.wallet.connected)

    state.user.logged = false
    state.user.username = 'null'
    localStorage.setItem('userLogged', false)
    localStorage.setItem('userUsername', state.user.username)

    router.push({ name: 'Index'})
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