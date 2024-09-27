//import{auth, createUserWithEmailAndPassword} from{'../firebase.js'}
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  alert(`Welcome, ${username}! Your account has been created.`);
});
