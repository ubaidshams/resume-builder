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
                v-model="user.firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="user.lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="user.email"
                type="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="user.password"
                type="password"
                :rules="passwordRules"
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
import { auth, db } from "../apis/firebase/firebaseConfig";
import router from "../router/index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "SignupView",
  data() {
    return {
      valid: false,
      user: {
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        uid: "",
      },
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters",
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be more than than 6 characters",
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    handleSubmit: async function () {
      try {
        await createUserWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        ).then(userCredential => {
          this.user.uid = userCredential.user.uid;
          userCredential.user.displayName = this.user.firstname;
        });
        this.sendUserData();
        this.$vToastify.success("Registered successfully");

        router.push("/");
      } catch (error) {
        console.log(error);
        this.$vToastify.error(error);
      }
    },
    sendUserData: async function () {
      try {
        const docRef = await addDoc(collection(db, "user"), this.user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
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
