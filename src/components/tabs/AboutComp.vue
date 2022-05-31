<template>
    <v-card elevation="10" class="expCard">
        <v-form @submit.prevent="aboutDetails">
            <v-text-field label="Designation" v-model.trim="aboutPayload.designation" placeholder="ex.Front-end dev or java dev"></v-text-field>
        <v-textarea label="About" placeholder="Not more than 100 words" v-model.trim="aboutPayload.description" outlined></v-textarea>
        <v-btn @click="aboutDetails">UPDATE</v-btn>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        name:"AboutComp",
        data(){
            return{ 
                aboutPayload:{ 
                    designation:"",
                    description:"", 
                }
            }
        },
        methods:{ 
            aboutDetails(){
                this.$store.dispatch("aboutDetails",this.aboutPayload)
            }
        }
    }
</script>

<style scoped>
.expCard{ 
    padding: 15px;
}
</style>