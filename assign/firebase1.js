// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjgBOytyl7Cn3U7ALxcFSEa4d3EKfUFLg",
  authDomain: "first-d1ec8.firebaseapp.com",
  projectId: "first-d1ec8",
  storageBucket: "first-d1ec8.appspot.com",
  messagingSenderId: "317204866182",
  appId: "1:317204866182:web:984e8641f4b07321f89d07",
  measurementId: "G-W4BWWB0V4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);