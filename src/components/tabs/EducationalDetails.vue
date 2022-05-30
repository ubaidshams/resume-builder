<template>
  <v-card elevation="0">
    <v-form @submit.prevent="" >
      <!-- masters degree starts -->
      <v-card class="form" elevation="0">
        <v-card-title>Masters</v-card-title>
        <v-text-field
          label="Institution Name"
          v-model.trim="educationPayload.institutonName.mInstitution"
        ></v-text-field>
        <v-text-field label="Location" v-model.trim="educationPayload.masters.mLocation"></v-text-field>

        <v-row class="d-flex">
          <!-- from -->

          <v-col cols="12" sm="6">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-combobox
                  v-model.trim="educationPayload.masters.mastersFrom"
                  chips
                  small-chips
                  label="From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-combobox>
              </template>
              <v-date-picker
                v-model="educationPayload.masters.mastersFrom"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu1 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.menu1.save(educationPayload.masters.mastersFrom)
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <!-- to -->

          <v-col cols="12" sm="6">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="educationPayload.masters.mastersTo"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-combobox
                  v-model="educationPayload.masters.mastersTo"
                  chips
                  small-chips
                  label="To"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-combobox>
              </template>
              <v-date-picker
                v-model="educationPayload.masters.mastersTo"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu2.save(educationPayload.masters.mastersTo)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-card>
      <!-- master degree ends -->
      <!-- bacholers degree starts -->
      <v-card class="form" elevation="0">
        <v-card-title>Bacholers</v-card-title>
        <v-text-field
          label="Institution Name"
          v-model="educationPayload.institutonName.bInstitution"
        ></v-text-field>

        <v-text-field label="Location" v-model="educationPayload.bacholers.bLocation"></v-text-field>

        <v-row class="d-flex">
          <!-- from -->

          <v-col cols="12" sm="6">
            <v-menu
              ref="educationPayload.menu1"
              v-model="educationPayload.menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-combobox
                  v-model="educationPayload.bacholers.bacholersFrom"
                  chips
                  small-chips
                  label="From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-combobox>
              </template>
              <v-date-picker
                v-model="educationPayload.bacholers.bacholersFrom"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="educationPayload.menu1 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.educationPayload.menu1.save(educationPayload.bacholers.bacholersFrom)
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <!-- to -->

          <v-col cols="12" sm="6">
            <v-menu
              ref="educationPayload.menu2"
              v-model="educationPayload.menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-combobox
                  v-model="educationPayload.bacholers.bacholersTo"
                  chips
                  small-chips
                  label="From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-combobox>
              </template>
              <v-date-picker
                v-model="educationPayload.bacholers.bacholersTo"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="educationPayload.menu2 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.educationPayload.menu2.save(educationPayload.bacholers.bacholersTo)
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-card>
      <!-- bacholers degree ends -->
      <v-btn @click="educationDetails">UPDATE</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "EducationalDetails",
  data() {
    return {
      
      educationPayload: {
        menu1: false,
      menu2: false,
        masters: {
          mastersIn: [],
          mastersFrom: [],
          mastersTo: [],
          mLocation:[],
        },
        bacholers: {
          bacholersIn: [],
          bacholersFrom: [],
          bacholersTo: [],
          bLocation:[]
        },
        institutonName: {
          bInstitution: "",
          mInstitution: "",
        },
      },
    };
  },
  methods: {
    educationDetails(){
      this.$store.dispatch("educationDetails", this.educationPayload)
      console.log(this.$store.state.educationalDetails.educationPayload.institutonName.mInstitution);
    }
    
  },
};
</script>

<style scoped>
.form {
  padding: 10px;
}
</style>
