import { createStore } from 'vuex'

import like from "./modules/like";
import profile from "./modules/profile";

export default createStore({
  modules: {
    like,
    profile,
  }
})
