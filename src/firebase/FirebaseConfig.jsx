// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAtwTatMXxaZ5-y_bDeykz8TB2xzVehkPE",
  authDomain: "myecom-fd935.firebaseapp.com",
  projectId: "myecom-fd935",
  storageBucket: "myecom-fd935.firebasestorage.app",
  messagingSenderId: "792060649164",
  appId: "1:792060649164:web:ba3beb952c7ba1a91e6c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export {auth, fireDB}