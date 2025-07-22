// FormLogin/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcYDLdMi53cAxQE6uDSq0hRAQYE5L_X0k",
  authDomain: "basiclogin-bc302.firebaseapp.com",
  projectId: "basiclogin-bc302",
  storageBucket: "basiclogin-bc302.firebasestorage.app",
  messagingSenderId: "7578565990",
  appId: "1:7578565990:web:37649ccf1c2026d1b9dca7",
  measurementId: "G-BTB3LB0F1G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
