<template>
  <ul>
      <li v-for="item in this.$store.state.payload" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CheckVuex",
  data() {
    return {
      items: [
        { title: "hello" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      
    };
  },
};
</script>

<style scoped>
    ul li{ 
        list-style: none;
    }
</style>
