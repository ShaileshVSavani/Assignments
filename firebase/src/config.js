// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKHVvdEAiPPVX6dWk0GTy35eoYPx9hs0Y",
  authDomain: "fir-project-8c4cb.firebaseapp.com",
  projectId: "fir-project-8c4cb",
  storageBucket: "fir-project-8c4cb.appspot.com",
  messagingSenderId: "620615644088",
  appId: "1:620615644088:web:ce7983f82efa9b1f86d54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export const db = getFirestore(app);

 export const GoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
 };

 export const SignUpMethodEmail = async (email, password) => {
   return await createUserWithEmailAndPassword(auth, email, password)
 };

 export const SignInMethodEmail = async (email, password) => {
   return await signInWithEmailAndPassword(auth, email, password)
 };