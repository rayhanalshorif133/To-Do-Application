// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABZeHS0ic26-B8MywvzzVlMizM2LFb6cg",
  authDomain: "to-do-00001.firebaseapp.com",
  projectId: "to-do-00001",
  storageBucket: "to-do-00001.appspot.com",
  messagingSenderId: "735062364630",
  appId: "1:735062364630:web:998123f5717e6c0b385477"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };