// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"  // import getFirestore to connect app
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfyQ9PxLWDSGib8PHBH8rS4lcf-IfW5Y",
  authDomain: "todo-app-44b5c.firebaseapp.com",
  projectId: "todo-app-44b5c",
  storageBucket: "todo-app-44b5c.appspot.com",
  messagingSenderId: "646078109136",
  appId: "1:646078109136:web:83ef0e91656b360308d5d5",
  measurementId: "G-BDT1G4DXVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
