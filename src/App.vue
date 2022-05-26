<template>
  <v-app>
    <v-app-bar app dark>
      <NavBar />
    </v-app-bar>
    <v-main>
      <NavbarCompVue/>
    <ResumePreviewVue/>   

    </v-main> 
    

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarCompVue from './components/navbar/NavbarComp.vue';
import ResumePreviewVue from './components/ResumePreview.vue';
import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components:{
    NavBar,
    NavbarCompVue,
    ResumePreviewVue
  },
  data(){
    return{ 

    }
  }
}
</script>
