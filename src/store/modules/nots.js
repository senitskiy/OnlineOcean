// import axios from 'axios';

// axios.get('nots')
//   .then(function (response) {
//     state.nots = response
//   })

const state = {
  nots:[
    {
      id: 1,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 2,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'purchase',
    },
    {
      id: 3,
      sourceId: 'artstudio',
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'purchase',
    },
    {
      id: 4,
      sourceId: 'artstudio',
      sourceType: 'user',
      itemId: 34,
      itemType: 'box',
      action: 'open',

      // Убрать
    },
    {
      id: 5,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'purchase',
    },
    {
      id: 6,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 7,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 8,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 9,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 10,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 11,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 12,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 13,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 14,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 15,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 16,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
  ],
  message:{
    someoneBought: 'Your NFT was purchased by a user.',
    youBought: 'You have purchased NFT.',
    youOpened: 'You opened the box and got the NFT.',
    someoneLiked: 'The user has put a like to your NFT.',
  },
};

const getters = {
  nots: state => state.nots,
  notsMessage: state => state.message,
};

const mutations = {
  deleteNote(state, payload){
    // Удалять локально из state
    let needDelete = state.nots.find((item) => item.id === payload)

    // Убрать 
    let index = state.nots.indexOf(needDelete)
    if (index !== -1){
      state.nots.splice(index, 1)
    } else{
      state.nots.push(needDelete)
    } 

    // Раскоментировать
    // axios.post('nots/delete', payload)
    //   .then(function () {
    //     let index = state.nots.indexOf(needDelete)
    //     if (index !== -1){
    //       state.nots.splice(index, 1)
    //     } else{
    //       state.nots.push(needDelete)
    //     } 
    //   })
  }
};

export default {
  state,
  getters,
  mutations,
};