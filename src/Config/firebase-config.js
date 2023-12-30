// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCcAB4mBFSxGa7Fk9foia9LR9ANlO_Iuwg",
  authDomain: "vortex-number-finder.firebaseapp.com",
  projectId: "vortex-number-finder",
  storageBucket: "vortex-number-finder.appspot.com",
  messagingSenderId: "759665216002",
  appId: "1:759665216002:web:7061f389a99fb53bab751b",
  measurementId: "G-69D0FG3LR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);