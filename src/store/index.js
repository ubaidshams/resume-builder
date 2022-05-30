import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// Personal-Details module
export const personalDetails = {
  state: {
    payload: {
      name: "",
      phoneNumber: "",
      age: "",
      email: "",
      address: "",
      profilePicture: null,
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
};


export const educationalDetails = {
  state: {
    educationPayload: {
      menu1: false,
      menu2: false,
      masters: {
        mastersIn: [],
        mastersFrom: "",
        mastersTo: "",
        mLocation: "",
      },
      bacholers: {
        bacholersIn: [],
        bacholersFrom: [],
        bacholersTo: [],
        bLocation: [],
      },
      institutonName: {
        bInstitution: "",
        mInstitution: "",
      },
    },
  },
  getters: {},
  mutations: {
    educationDetails: (state, payload) => {
      state.educationPayload = payload;
     }
  },
  actions: {
    educationDetails: (context, payload) => {
      context.commit("educationDetails", payload);
    },
  },
};

export default new Vuex.Store({
  state: {
    // skeleton-loader
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    personalDetails,
    educationalDetails,
  },
});

// console.log(state.PersonalDetails.payload.age)
