// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFqkIHKQcuS8Liq8boLAJg9ErgRpF_03w",
  authDomain: "authetificationbidhouse.firebaseapp.com",
  databaseURL: "https://authetificationbidhouse-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authetificationbidhouse",
  storageBucket: "authetificationbidhouse.appspot.com",
  messagingSenderId: "699740366256",
  appId: "1:699740366256:web:9fa2f2cd9f3736956ca275",
  measurementId: "G-NMNQLGDCXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);