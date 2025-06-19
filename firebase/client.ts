// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeScZlgXNBp8H1NAVxvC--V2OGpdRpzWs",
  authDomain: "voxprep.firebaseapp.com",
  projectId: "voxprep",
  storageBucket: "voxprep.firebasestorage.app",
  messagingSenderId: "316701781792",
  appId: "1:316701781792:web:72b1e33cf6f9fac91ab145",
  measurementId: "G-J724ZXRPH2"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();

export const auth =getAuth(app);
export const db=getFirestore(app);