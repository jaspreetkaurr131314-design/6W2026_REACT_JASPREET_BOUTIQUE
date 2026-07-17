// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxaiXWpgUYWpNZMJvzm5KyrpR7DCKGhB4",
  authDomain: "fir-demo-5fe7f.firebaseapp.com",
  projectId: "fir-demo-5fe7f",
  storageBucket: "fir-demo-5fe7f.firebasestorage.app",
  messagingSenderId: "54560405099",
  appId: "1:54560405099:web:e280c3a6fa06879a89632e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);