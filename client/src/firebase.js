// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flatematematch.firebaseapp.com",
  projectId: "flatematematch",
  storageBucket: "flatematematch.appspot.com",
  messagingSenderId: "417636415661",
  appId: "1:417636415661:web:1b9a366bcfb6db5aed6e24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
