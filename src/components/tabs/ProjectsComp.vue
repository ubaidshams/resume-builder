<template>
    <v-card elevation="0">
        <v-form @submit.prevent="projectsDetails">
            <v-card-subtitle class="subtitle">
            Enter Two Recent Projects
            
        </v-card-subtitle>
        <v-textarea v-model.trim="projectPayload.project1" class="project1" outlined label="Project 1" placeholder="Not more than 100 words"></v-textarea>
            <v-spacer></v-spacer>
            <v-textarea v-model.trim="projectPayload.project2" class="project2" outlined label="Project 2" placeholder="Not more than 100 words"></v-textarea>
        <v-btn class="green--text" @click="projectsDetails">UPDATE</v-btn>
        </v-form>

    </v-card>
</template>

<script>
    export default {
        name:"ProjectsComp",
        data(){
            return{
                projectPayload:{
                    project1:"",
                    project2:""
                }
             }

        },
        methods:{
            projectsDetails(){
                console.log("data is sent" , this.projectPayload);
                this.$store.dispatch("projectsDetails", this.projectPayload);
            }
        }
    }
</script>

<style scoped>
.subtitle{
    text-align: center;
 }
.project1,.project2{ 
    margin-top: 15px;
}
</style>