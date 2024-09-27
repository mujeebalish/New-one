
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBPAm8-q16Kf0oWgOkkD96-gE4tm6b-3A8",
    authDomain: "mujeeb-385b0.firebaseapp.com",
    projectId: "mujeeb-385b0",
    storageBucket: "mujeeb-385b0.appspot.com",
    messagingSenderId: "593255510425",
    appId: "1:593255510425:web:c1e4dd783898155824e308",
    measurementId: "G-DFB5H8GZ07"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  export{auth, createUserWithEmailAndPassword,}
