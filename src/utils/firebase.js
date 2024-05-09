// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "blog-app-c3209.firebaseapp.com",
  projectId: "blog-app-c3209",
  storageBucket: "blog-app-c3209.appspot.com",
  messagingSenderId: "457911920633",
  appId: "1:457911920633:web:8b2790eb096ccfbebcbf28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);