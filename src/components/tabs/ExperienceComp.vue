<template>
  <v-card class="expCard">
    <v-form @submit.prevent="experienceDetails">
      <v-text-field
        label="Company Name"
        v-model.trim="experiencePayload.companyName"
        clearable
        placeholder="eg.Test Yantra or Google.."
      ></v-text-field>
      <v-text-field
        label="Company Location"
        v-model.trim="experiencePayload.companyLocation"
        clearable
        placeholder="eg.Chennai or Bangalore"
      ></v-text-field>
      <v-col cols="11" sm="5">
        <v-menu
          ref="menu"
          v-model="experiencePayload.menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="experiencePayload.cFrom"
              label="Started From"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="experiencePayload.cFrom"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="experiencePayload.menu = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(experiencePayload.cFrom)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-text-field clearable label="Role In The Company"  v-model="experiencePayload.roleInThatCompany" placeholder="eg.Front-End Dev"></v-text-field>
      <v-textarea clearable v-model="experiencePayload.responsibility" outlined label="Responsibilities" placeholder="eg. I did This and That"></v-textarea>
      <v-btn @click="experienceDetails">UPDATE</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "ExperienceComp",
  data() {
    return {
      experiencePayload: {
        menu: false,
        companyName: "",
        companyLocation: "",
        cFrom: "",
        cTo: "Present",
        roleInThatCompany: "",
        responsibility:"",
      },
    };
  },
  methods: {
      experienceDetails(){
          this.$store.dispatch("experienceDetails",this.experiencePayload)
      }
  },
};
</script>

<style scoped>
.expCard {
  padding: 15px;
}
</style>
