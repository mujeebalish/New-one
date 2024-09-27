
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-Auth.js";
  


  const firebaseConfig = {
    apiKey: "AIzaSyBPAm8-q16Kf0oWgOkkD96-gE4tm6b-3A8",
    authDomain: "mujeeb-385b0.firebaseapp.com",
    projectId: "mujeeb-385b0",
    storageBucket: "mujeeb-385b0.appspot.com",
    messagingSenderId: "593255510425",
    appId: "1:593255510425:web:814e2e60efb3774124e308",
    measurementId: "G-YGL8HL83TK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export{auth ,createUserWithEmailAndPassword}
  
  