<template>
  <v-app>
    <v-app-bar app dark>
      <NavBar />
    </v-app-bar>
    <v-main>
      
      <router-view />
    </v-main> 
       
    

    
  </v-app>
</template>

<script>

import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components:{
    
    NavBar,
  },
  data(){
    return{ 

    }

  }
}
</script>
