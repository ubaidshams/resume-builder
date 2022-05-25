<template>
  <v-app>
<<<<<<< HEAD
    <v-main>
      <NavbarCompVue/>
    </v-main> 
    <ResumePreviewVue/>   
=======
    <v-app-bar app dark>
      <NavBar />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
>>>>>>> e312ba2d2c5a99b519a57c6b952935756ff1a393
  </v-app>
</template>

<script>
<<<<<<< HEAD
import NavbarCompVue from './components/navbar/NavbarComp.vue';
import ResumePreviewVue from './components/ResumePreview.vue';
export default {
  name: 'App',
  components:{
    NavbarCompVue,
    ResumePreviewVue
  },
  data(){
    return{ 

    }
=======
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",

  components: {
    NavBar,
>>>>>>> e312ba2d2c5a99b519a57c6b952935756ff1a393
  },
};
</script>
