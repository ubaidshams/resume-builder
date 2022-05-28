<template>
    <v-card id="_resumePreviewComp" class="red " width="45%">
        <CheckVuexVue/>
    </v-card>
</template>

<script>
import CheckVuexVue from './tabs/CheckVuex.vue'
    export default {
        name:"ResumePreview",
        components:{
            CheckVuexVue
        }
    }
</script>

<style scoped>
#_resumePreviewComp{
    position: absolute;
    margin-left: 53%;
    margin-top: 200px;
    padding: 15px;
}
</style>