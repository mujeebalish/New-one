
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_o-JQhe5rP9rDEKlXAq2Pf2TeNVLc9Uw",
    authDomain: "login-page-8769d.firebaseapp.com",
    projectId: "login-page-8769d",
    storageBucket: "login-page-8769d.appspot.com",
    messagingSenderId: "323503777957",
    appId: "1:323503777957:web:1b2d7cf91b89c0668c854c",
    measurementId: "G-YEWTJHW7F2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
