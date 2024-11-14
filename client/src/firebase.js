// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f2a25.firebaseapp.com",
  projectId: "mern-estate-f2a25",
  storageBucket: "mern-estate-f2a25.appspot.com",
  messagingSenderId: "470541088286",
  appId: "1:470541088286:web:8fec6ffbf487309473a00f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);