import { createStore } from 'vuex'

import blockchains from "./modules/blockchains";
import nots from "./modules/nots";
import profile from "./modules/profile";
import theme from "./modules/theme";

export default createStore({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    blockchains,
    nots,
    profile,
    theme,
  }
})
