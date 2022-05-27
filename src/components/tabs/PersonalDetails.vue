<template>
  <v-card id="_formCard" class="" elevation="0">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleSubmit(this.payload)">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:10"
        >
          <v-text-field
            v-model="payload.name"
            :counter="10"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="phoneNumber"
          :rules="{
            required: true,
            digits: 12,
            regex: '^(71|72|74|76|91|82|84|85|86|87|88|89)\\d{10}$',
          }"
        >
          <v-text-field
            v-model="payload.phoneNumber"
            :counter="12"
            :error-messages="errors"
            label="Phone Number"
            required
          ></v-text-field>
        </validation-provider>
        
          <v-text-field
            v-model.number="payload.age"
            :counter="2"
            :error-messages="errors"
            label="Age"
            required
          ></v-text-field>
        
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="payload.email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="select" rules="required">
          <v-select
            v-model="payload.select"
            :items="payload.items"
            :error-messages="errors"
            label="Select"
            data-vv-name="select"
            required
            item-value
          ></v-select>
        </validation-provider>

        

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
          @click="handleSubmit"
        >
          submit
        </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>
  </v-card>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "PersonalDeatails",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    payload:{
      name: "",
    phoneNumber: "",
    age: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    }
    
  }),

  methods: {
    handleSubmit(){
      this.$refs.observer.validate();
      console.log("submit is clicked");
      this.$store.dispatch("handleSubmit", this.payload);
      console.log(" this is vuex",this.$store.state.payload)
      this.clear()
      
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
  
};
</script>

<style scoped>
#_formCard {
  padding: 15px;
  overflow: visible;
}
</style>

