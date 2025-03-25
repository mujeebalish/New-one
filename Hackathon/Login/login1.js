let emailInp = document.getElementById('email-inp');
let passwordInp = document.getElementById('password-inp');
let passwordBox = document.getElementById('password-box'),
passwordInp.addEventListener('oninput', () =>{
  let passwordI = passwordInp.value;
for (var i = 0; i < passwordI.length; i++) {
if (passwordI[i]) {
  let line= document.createElement('hr');
  passwordBox.appendChild(line)
  }
  }
})