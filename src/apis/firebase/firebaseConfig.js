// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8rThuEu1-iMArLkrnkfkJNsFpq6yFoNM",
  authDomain: "resume-builder-e2d0c.firebaseapp.com",
  projectId: "resume-builder-e2d0c",
  storageBucket: "resume-builder-e2d0c.appspot.com",
  messagingSenderId: "1010985154805",
  appId: "1:1010985154805:web:6834436882d3fb69f02dbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
