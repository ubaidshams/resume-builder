<template>
  <v-app>
    <v-app-bar app dark>
      <NavBar />
    </v-app-bar>
<<<<<<< HEAD
    <v-main>
      <NavbarCompVue/>
    <ResumePreviewVue/>   

    </v-main> 
    

=======
>>>>>>> dd8e2ae17be445005d95956d84c1e1e3c614efda
    <v-main>
      
      <router-view />
<<<<<<< HEAD
    </v-main>
=======
    </v-main> 
       
    

    
>>>>>>> dd8e2ae17be445005d95956d84c1e1e3c614efda
  </v-app>
</template>

<script>
<<<<<<< HEAD
import NavbarCompVue from './components/navbar/NavbarComp.vue';
import ResumePreviewVue from './components/ResumePreview.vue';
import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components:{
    NavBar,
    NavbarCompVue,
    ResumePreviewVue
=======

import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components:{
    
    NavBar,
>>>>>>> dd8e2ae17be445005d95956d84c1e1e3c614efda
  },
  data(){
    return{ 

    }
<<<<<<< HEAD
=======

>>>>>>> dd8e2ae17be445005d95956d84c1e1e3c614efda
  }
}
</script>
