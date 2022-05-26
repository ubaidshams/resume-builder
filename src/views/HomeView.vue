<template>
  <div class="d-flex">
    <NavbarCompVue />
    <ResumePreviewVue />
  </div>
</template>

<script>
import NavbarCompVue from "../components/navbar/NavbarComp.vue";
import ResumePreviewVue from "../components/ResumePreview.vue";
export default {
  name: "Home",

  components: {
    NavbarCompVue,
    ResumePreviewVue,
  },
};
</script>
