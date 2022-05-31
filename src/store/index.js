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

// Education-Detail module
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
        bacholersFrom: "",
        bacholersTo: "",
        bLocation: "",
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


// Projects-Details module
export const projectsDetails = {
  state: {
    projectPayload: {
      project1: "",
      project2: "",
    },
  },
  getters: {},
  mutations: {
    projectsDetails: (state, payload) => { 
      state.projectPayload = payload
    }
  },
  actions: {
    projectsDetails: (context, payload) => {
      context.commit("projectsDetails", payload);
    },
  },
};


// Skills-Details module

export const skillDetails = {
  state: {
    skillsPayload: {
      languagesProficient: false,
      frontEndProficient: false,
      backEndProficient: false,
      sqlProficient: false,
      noSqlEndProficient: false,
      devToolsProficient: false,
      languages: "",
      frontEnd: "",
      backEnd: "",
      rdbms: "",
      noSQL: "",
      devTools: "",
    },
  },
  getters: {},
  mutations: {
    skillsDetails: (state, payload) => {
      state.skillsPayload = payload;
    }
  },
  actions: {
    skillsDetails: (context, payload) => {
      context.commit("skillsDetails", payload);
    },
  },
};


// Experience-Details module
export const experienceDetails = {
  state: {
    experiencePayload: {
      menu: false,
      companyName: "",
      companyLocation: "",
      cFrom: "",
      cTo: "Present",
      roleInThatCompany: "",
      responsibility: "",
    },
  },
  getters: {},
  mutations: {
    experienceDetails: (state, payload) => {
      state.experiencePayload = payload;
    }
  },
  actions: {
    experienceDetails: (context, payload) => {
      context.commit("experienceDetails", payload);
    },
  },
};



// About-Deatils module
export const aboutDetails = {
  state: {
    aboutPayload: {
      designation: "",
      description: "",
    },
  },
  getters: {},
  mutations: {
    aboutDetails: (state, payload) => {
      state.aboutPayload = payload
    },
  },
  actions: {
    aboutDetails: (context, payload) => {
      context.commit("aboutDetails", payload);
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
    projectsDetails,
    skillDetails,
    experienceDetails,
    aboutDetails,
  },
});


