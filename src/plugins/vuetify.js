import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primaryyy: "#E53935",
        secondary: "#FFCDD2", // #FFCDD2
        accent: "#3F51B5", // #3F51B5
        navBar: "#2874F0",
        formCard: "#E8F0FE",
      },
    },
  },
});
