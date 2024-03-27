// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTm3fTdS3ByFFMzRPB0VmC67mXxwhPsdc",
  authDomain: "santo-first-project.firebaseapp.com",
  projectId: "santo-first-project",
  storageBucket: "santo-first-project.appspot.com",
  messagingSenderId: "548599087106",
  appId: "1:548599087106:web:56cbec78c09fc2de0fe71b",
  measurementId: "G-M9PVDC2L3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authentication = getAuth(app);
const db = getFirestore(app);

export{app, analytics, authentication,db};