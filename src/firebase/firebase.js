// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ9-bsG9FPbyvjTANwIOyiRR6EOOnI3BM",
  authDomain: "newsapp-d0daa.firebaseapp.com",
  projectId: "newsapp-d0daa",
  storageBucket: "newsapp-d0daa.appspot.com",
  messagingSenderId: "194527092137",
  appId: "1:194527092137:web:3ae2829f4ec7d3f4dcf8b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
}