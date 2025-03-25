
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you 
  const firebaseConfig = {
    apiKey: "AIzaSyDmRcaCmxogM0lxMKfayi3id_urOklKVdw",
    authDomain: "login-page-8769d.firebaseapp.com",
    projectId: "login-page-8769d",
    storageBucket: "login-page-8769d.firebasestorage.app",
    messagingSenderId: "323503777957",
    appId: "1:323503777957:web:a1cfc9fed443e3dd8c854c",
    measurementId: "G-D2NZT0JF84"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  export{auth, createUserWithEmailAndPassword}
