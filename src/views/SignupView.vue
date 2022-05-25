<template>
  <div>
    <template>
      <v-form
        @submit.prevent="handleSubmit"
        v-model="valid"
        class="d-flex justify-center align-center"
      >
        <v-container class="d-flex flex-column justify-center align-center">
          <h1>Signup</h1>
          <v-row class="d-flex flex-column justify-center align-center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                type="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="password"
                type="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center">
              <v-btn color="success" type="submit">register</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>
  </div>
</template>

<script>
import { auth } from "../apis/firebase/firebaseConfig";
import router from "../router/index";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "SignupView",
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      password: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    handleSubmit: async function () {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$vToastify.success("Registered successfully");
        router.push("/login");
      } catch (error) {
        console.log(error);
        this.$vToastify.error("Error");
      }
      // createUserWithEmailAndPassword(auth, this.email, this.password)
      //   .then(userCredential => {
      //     // Signed in
      //     const user = userCredential.user;
      //     consoe.log(user);
      //     // ...
      //   })
      //   .catch(error => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // ..
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.formHolder {
  width: 100%;
  height: 90vh;
}
form {
  width: 100%;
  height: 90vh;
}
.row {
  width: 100%;
}
</style>
