import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    payload: {
      name: "srivishnu ",
      phoneNumber: "6382031401",
      age: "24",
      email: "duraisrivishnu@gmail.com",
      select: "item1",
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
