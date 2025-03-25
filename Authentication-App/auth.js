//var myh1 = document.createElement('h1');
//var mytext = document.createTextNode('Mujeeb Alish');
//myh1.appendChild(mytext);
/*var getcoldiv = document.getElementsByClassNameById('coldiv');
var getcolbtn = document.getElementById('colbtn');
getcolbtn.addEventListener('click', function(){
    getcoldiv.style.background-color = 'black'
})*/
   
  
 /* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyC_o-JQhe5rP9rDEKlXAq2Pf2TeNVLc9Uw",
    authDomain: "login-page-8769d.firebaseapp.com",
    projectId: "login-page-8769d",
    storageBucket: "login-page-8769d.appspot.com",
    messagingSenderId: "323503777957",
    appId: "1:323503777957:web:127b6f7ff6af79318c854c",
    measurementId: "G-BC0LEN7Z82"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();*/
  
  // Import the functions you need from the SDKs you need
  /*
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
  // : Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPAm8-q16Kf0oWgOkkD96-gE4tm6b-3A8",
    authDomain: "mujeeb-385b0.firebaseapp.com",
    projectId: "mujeeb-385b0",
    storageBucket: "mujeeb-385b0.appspot.com",
    messagingSenderId: "593255510425",
    appId: "1:593255510425:web:814e2e60efb3774124e308",
    measurementId: "G-YGL8HL83TK"
  };*/

  // Initialize Firebase
 /* const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);*/

  
  
  
  
  
  
  
  import {auth, createUserWithEmailAndPassword,} from '/Authentication-App/firebase.js';
  let email = document.getElementById('email');
  let password = document.getElementById('password')
let signupBtn = document.getElementById('register-btn');
signupBtn.addEventListener('click', () => {
// console.log(email.value,password.value)
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    alert('Successfully signed up')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  
})

 
 
 


