<template>
  <div class="menuBlock d-flex align-center justify-space-around">
    <router-link to="/" class="home grey--text">Resume Builder</router-link>
    <router-link to="/" class="grey--text">Preview</router-link>
  </div>
</template>

<script>
export default {
  name: "MenuBlock",
};
</script>

<style lang="scss" scoped>
.menuBlock {
  width: 20%;
  height: 10vh;
}
.home {
  font-weight: 700;
}
a {
  text-decoration: none;
  font-size: 1.25rem;
}
</style>
