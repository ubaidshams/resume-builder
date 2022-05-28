<template>
  <section>
    <article id="_header--article">
        <v-card-title class="gray--text">{{this.$store.state.payload.name}}</v-card-title>
        <v-img
            :lazy-src="imgSrc"
            max-height="150"
            max-width="250"
            :src="imgSrc"
            ></v-img>
    </article>    
  </section>
</template>

<script>
export default {
  name: "CheckVuex",
  data() {
    return {
      imgSrc : "hello",
      
    };
  },
};
</script>

<style scoped>
    ul li{ 
        list-style: none;
    }
    #_header--article{ 
        border:2px solid green;
    }
</style>
