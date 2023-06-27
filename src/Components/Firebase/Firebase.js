// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBsuUV9Q6ytmhuak4AOqYkE4r3RYYvpbLI",
  authDomain: "scoala-auto-ac5da.firebaseapp.com",
  projectId: "scoala-auto-ac5da",
  storageBucket: "scoala-auto-ac5da.appspot.com",
  messagingSenderId: "653178305850",
  appId: "1:653178305850:web:d551e86a58f5d7b51de403",
  measurementId: "G-FY0JBLDJ3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





export const auth=getAuth(app);
