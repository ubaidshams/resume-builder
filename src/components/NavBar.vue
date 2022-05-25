<template>
  <section class="navbarBlock d-flex justify-center align-center">
    <article class="d-flex align-center justify-space-between">
      <MenuBlock />
      <AuthBlock />
    </article>
  </section>
</template>

<script>
import MenuBlock from "./MenuBlock.vue";
import AuthBlock from "./AuthBlock.vue";

export default {
  name: "NavBar",
  components: {
    MenuBlock,
    AuthBlock,
  },
};
</script>

<style  scoped>
.navbarBlock
{
    width: 100%;
    height: 10vh;
}
.navbarBlock article{
    width:95%;
    height: 10vh;
}
</style>
