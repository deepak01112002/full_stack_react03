// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVPvg0juJN7srNLPfUauI6efXjG7_3ZoE",
  authDomain: "fullstack3-db717.firebaseapp.com",
  projectId: "fullstack3-db717",
  storageBucket: "fullstack3-db717.appspot.com",
  messagingSenderId: "564939327885",
  appId: "1:564939327885:web:2f7041c081302ad3c155c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)