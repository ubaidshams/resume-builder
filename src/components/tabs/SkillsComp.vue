<template>
  <v-card elevation="0"  >
    <v-card-subtitle class="subtitle">Enter Your Skills</v-card-subtitle>
    <v-form @submit="skillsDetails">
        <v-card elevation="0" class="skillCard">
            <div class="field-container">
            <v-text-field rows="5" label="Languages" v-model.trim="skillsPayload.languages" clearable placeholder="ex:Java,Python,.."></v-text-field>
            <v-checkbox class="proficient--checkbox" v-model="skillsPayload.languagesProficient" label="Proficient in Languages"></v-checkbox>
            
            </div>
            <div class="field-container">
                <v-text-field label="Front-End" v-model.trim="skillsPayload.frontEnd" clearable  placeholder="ex: vue js, react js,.."></v-text-field>
                <v-checkbox v-model="skillsPayload.frontEndProficient" class="proficient--checkbox" label="Proficient in Front-End"></v-checkbox>
            </div>          
            
            <div class="field-container">
            <v-text-field rows="5" label="Back-End" v-model.trim="skillsPayload.backEnd" clearable placeholder="ex:node js,spring,.."></v-text-field>
            <v-checkbox class="proficient--checkbox" v-model="skillsPayload.backEndProficient" label="Proficient in Back-End"></v-checkbox>
            
            </div>
             <div class="field-container">
                <v-text-field label="SQL" v-model.trim="skillsPayload.rdbms" clearable placeholder="ex:MySQL, SQLlite,..."></v-text-field>
                <v-checkbox v-model="skillsPayload.sqlProficient" class="proficient--checkbox" label="Proficient in SQL"></v-checkbox>
            </div> 
            <div class="field-container">
            <v-text-field label="NoSQL" v-model.trim="skillsPayload.noSQL" clearable placeholder="ex:mongo db, redis,..."></v-text-field>
            <v-checkbox v-model="skillsPayload.noSqlEndProficient" class="proficient--checkbox" label="Proficient in NoSQL"></v-checkbox>
            </div> 
            <div class="field-container">
            <v-text-field label="Dev-tools" v-model.trim="skillsPayload.devTools" clearable placeholder="ex: AWS, Docker,..."></v-text-field>
            <v-checkbox v-model="skillsPayload.devToolsProficient" class="proficient--checkbox" label="Proficient in Dev-Tools"></v-checkbox>
            </div> 
        <v-btn class="green--text" @click="skillsDetails">UPDATE</v-btn>
        </v-card>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "SkillsComp",
  data() {
    return {
      skillsPayload: {
        languagesProficient:false,
        frontEndProficient:false,
        backEndProficient:false,
        sqlProficient:false,
        noSqlEndProficient:false,
        devToolsProficient:false,
        languages:"",
        frontEnd:"",
        backEnd:"",
        rdbms:"",
        noSQL:"",
        devTools:"",
      },
    };
  },
  methods: {
      skillsDetails(){
          this.$store.dispatch("skillsDetails",this.skillsPayload);
          console.log(this.skillsPayload);
      }

  },
};
</script>

<style scoped>
.subtitle {
  text-align: center;
}
.skillCard{ 
    padding: 15px;
}
.field-container{ 
    margin-top: 5px;
    margin-bottom:-18px;
}
.proficient--checkbox{ 
    margin-bottom:-18px;
    margin-top:-18px;
}
</style>
