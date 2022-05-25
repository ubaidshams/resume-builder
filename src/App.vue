<template>
  <v-app>
    <v-main>
      <NavbarCompVue/>
    </v-main> 
    <ResumePreviewVue/>   
  </v-app>
</template>

<script>
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
  },
};
</script>
