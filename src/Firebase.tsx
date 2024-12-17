// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnOKp4VFtV2g6w1XblJmpgjH3j6n00DWk",
  authDomain: "portfolio-df494.firebaseapp.com",
  projectId: "portfolio-df494",
  storageBucket: "portfolio-df494.firebasestorage.app",
  messagingSenderId: "671842431231",
  appId: "1:671842431231:web:0daa2050900145e8161cca",
  measurementId: "G-6GL93L3WWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
