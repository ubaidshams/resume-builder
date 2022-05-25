<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
=======
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
>>>>>>> e312ba2d2c5a99b519a57c6b952935756ff1a393

Vue.use(VueRouter);

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'home',
    component: import("@/App.vue")
  },
  
]
=======
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",

    component: LoginView,
  },
  {
    path: "/signup",

    component: SignupView,
  },
];
>>>>>>> e312ba2d2c5a99b519a57c6b952935756ff1a393

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
