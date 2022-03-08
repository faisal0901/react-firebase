// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDp1wFfhdHvrvJEal49OToaQ2Y9we60DUk",
  authDomain: "firebas-9419a.firebaseapp.com",
  databaseURL: "https://firebas-9419a-default-rtdb.firebaseio.com",
  projectId: "firebas-9419a",
  storageBucket: "firebas-9419a.appspot.com",
  messagingSenderId: "544944090373",
  appId: "1:544944090373:web:ba98a9d4b8e359496c9b6c",
  measurementId: "G-RY7BBH6EJC"

});
const db=getFirestore(app)
const auth =getAuth()
export const authApp={
  createAccount:(email,password)=>createUserWithEmailAndPassword(auth,email,password),
  signInAccount:(email,password)=>signInWithEmailAndPassword(auth,email,password)
}