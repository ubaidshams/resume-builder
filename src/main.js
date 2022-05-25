<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
=======
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import toaster from "vue-toastify";
Vue.use(toaster, {
  position: "top-right",
});
>>>>>>> e312ba2d2c5a99b519a57c6b952935756ff1a393

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
<<<<<<< HEAD
  render: h => h(App)
}).$mount('#app')
=======
  render: h => h(App),
}).$mount("#app");
>>>>>>> e312ba2d2c5a99b519a57c6b952935756ff1a393
