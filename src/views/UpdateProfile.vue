<template>
  <div>
    <template>
      <div>
        <template>
          <v-form
            @submit.prevent="handleEdit"
            v-model="valid"
            class="d-flex justify-center align-center"
          >
            <v-container class="d-flex flex-column justify-center align-center">
              <h1>Update Profile</h1>
              <v-row class="d-flex flex-column justify-center align-center">
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="currentUser.displayName"
                    :rules="nameRules"
                    :counter="10"
                    label="Display name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="currentUser.email"
                    type="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <template>
                    <v-file-input
                      show-size
                      counter
                      label="File input"
                      v-model="inputFile"
                    ></v-file-input>
                  </template>
                </v-col>

                <v-col cols="12" md="4" class="d-flex justify-center">
                  <v-btn color="success" type="submit">Update</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { auth, storage } from "../apis/firebase/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export default {
  name: "UpdateProfile",
  data() {
    return {
      currentUser: null,
      inputFile: null,
      avatarURL: "",
    };
  },
  methods: {
    handleEdit: function () {
      this.uploaPhoto();
      this.getPhotoUrl();
      this.updateUser();
    },
    uploaPhoto: function () {
      try {
        const storageRef = ref(storage, `users/${this.currentUser.email}/`);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, this.inputFile).then(snapshot => {
          console.log("Uploaded a blob or file!");
        });
      } catch (error) {
        console.log(error);
      }
    },
    getPhotoUrl: function () {
      getDownloadURL(ref(storage, `users/${this.currentUser.email}`))
        .then(url => {
          // `url` is the download URL for 'images/stars.jpg'
          this.avatarURL = url;
        })
        .catch(error => {
          // Handle any errors
        });
    },
    updateUser: function () {
      updateProfile(auth.currentUser, {
        displayName: this.currentUser.displayName,
        photoURL: this.avatarURL,
      });
    },
  },
  beforeMount() {
    this.currentUser = auth.currentUser;
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
