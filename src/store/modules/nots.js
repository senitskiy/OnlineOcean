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
      itemType: '',
      action: '',
    },
    {
      id: 2,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 3,
      sourceId: 'artstudio',
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 4,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',

      // Убрать
    },
    {
      id: 5,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
    },
    {
      id: 6,
      sourceId: 23,
      sourceType: 'user',
      itemId: 34,
      itemType: '',
      action: '',
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
  ],
};

const getters = {
  nots: state => state.nots,
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