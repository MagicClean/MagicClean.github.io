// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAImn1T3GzacxfhRWsVC84EE8qkEaQ8Lew",
  authDomain: "magic-clean-4feff.firebaseapp.com",
  projectId: "magic-clean-4feff",
  storageBucket: "magic-clean-4feff.appspot.com",
  messagingSenderId: "38694385715",
  appId: "1:38694385715:web:132f31b17ed186103c4b46",
  measurementId: "G-KNWCQLB0JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);