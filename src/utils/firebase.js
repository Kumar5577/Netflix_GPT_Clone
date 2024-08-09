// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDci3z0SYi0nffOZGLqBaZBnFRCwXaqzCU",
  authDomain: "netflix-gpt-a91a2.firebaseapp.com",
  projectId: "netflix-gpt-a91a2",
  storageBucket: "netflix-gpt-a91a2.appspot.com",
  messagingSenderId: "116701851972",
  appId: "1:116701851972:web:4241654f813ba8ae382711",
  measurementId: "G-HCPP93K0WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();