<template>
  <div>
    <template>
      <v-form
        @submit.prevent="handleSubmit"
        v-model="valid"
        class="d-flex justify-center align-center"
      >
        <v-container class="d-flex flex-column justify-center align-center">
          <h1>Login</h1>
          <v-row class="d-flex flex-column justify-center align-center">
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
              <v-btn color="success" type="submit">login</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../apis/firebase/firebaseConfig";
import router from "../router/index";
export default {
  name: "LoginView",
  data() {
    return {
      valid: false,

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
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$vToastify.success("Login successfull");
        router.push("/");
      } catch (err) {
        console.log(err);
        this.$vToastify.error(err);
      }
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
