import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    payload: {
      name: "",
      phoneNumber: "",
      age: "",
      email: "",
      select: null,
      profilePicture:null,
    },
  },
  getters: {},
  mutations: {
    handleSubmit: (state, payload) => {
      state.payload = payload;
    },
  },
  actions: {
    handleSubmit: (context, payload) => {
      context.commit("handleSubmit", payload);
    },
  },
  modules: {},
});
