// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import  'firebase/compat/auth'
import "firebase/compat/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEBacIb8GUPk5dNLqFqq-PxZCGRbyCVw8",
  authDomain: "clone-7b94c.firebaseapp.com",
  projectId: "clone-7b94c",
  storageBucket: "clone-7b94c.appspot.com",
  messagingSenderId: "614275766735",
  appId: "1:614275766735:web:c4e829298aaa477bb6daba",
  measurementId: "G-06HHGRGHJZ"
};

// Initialize Firebase





   const  firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
   const auth=firebase.auth();

    export {db,auth};

