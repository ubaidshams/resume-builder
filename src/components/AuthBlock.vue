<template>
  <div class="authBlock">
    <v-btn color="primary" outlined to="/login">login</v-btn>
    <v-btn color="primary" outlined to="/signup">signup</v-btn>
  </div>
</template>

<script>
export default {
  name: "AuthBlock",
};
</script>

<style lang="scss" scoped>
.authBlock {
  width: 20%;
  display: flex;
  justify-content: end;
  gap: 20px;
}
</style>
