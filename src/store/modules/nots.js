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
      action: 'like',
    },
    {
      id: 3,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 4,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 5,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
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
      itemType: 'art',
      action: 'like',
    },
    {
      id: 8,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 9,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 10,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 11,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
    },
    {
      id: 12,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'purchase',
    },
    {
      id: 13,
      sourceId: 'artstudio',
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'purchase',
    },
    {
      id: 14,
      sourceId: 23,
      sourceType: 'box',
      itemId: 34,
      itemType: 'box',
      action: 'open',
    },
    {
      id: 15,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'purchase',
    },
    {
      id: 16,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: 'art',
      action: 'like',
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
  nots: state => state.nots.slice().reverse(),
  notsMessage: state => state.message,
};

const mutations = {
  deleteNote(state, payload){
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