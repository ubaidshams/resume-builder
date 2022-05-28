<template>
  <div class="authBlock">
    <div class="authBtns d-flex justify-space-around" v-if="userData == null">
      <v-btn color="primary" outlined to="/login">login</v-btn>
      <v-btn color="primary" outlined to="/signup">signup</v-btn>
    </div>
    <div v-else class="userBlock">
      <template>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="userData.photoURL == null ? avatar_url : userData.photoURL"
              width="40"
              height="40"
              class="rounded-circle"
            >
              <v-btn color="transparent" dark v-bind="attrs" v-on="on"> </v-btn>
            </v-img>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title class="" @click="item.func">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <!-- <v-img :src="userData.photoURL" class="rounded-circle"></v-img> -->
    </div>
  </div>
</template>

<script>
import { auth } from "../apis/firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router/index";

export default {
  name: "AuthBlock",
  data() {
    return {
      uid: "",
      url: "",
      avatar_url:
        "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
      userData: "",
      items: [
        { title: "Update Profile", func: this.handleUpdateProfile },
        { title: "Signout", func: this.handleSignout },
      ],
    };
  },

  methods: {
    handleSignout: async function () {
      signOut(auth);
    },
    handleUpdateProfile: function () {
      router.push("/update-profile");
    },
  },
  beforeMount() {
    console.log("before mount");
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.userData = user;
        console.log(user.displayName);
        // ...
        this.getUserName();
      } else {
        // User is signed out
        // ...
        this.userData = null;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.authBlock {
  width: 20%;
  display: flex;
  justify-content: end;
  gap: 20px;
}
.authBtns {
  width: 100%;
}
</style>
