document.getElementById('adminBtn').addEventListener('click', function() {
    document.getElementById('adminLogin').classList.add('active');
    document.getElementById('studentLogin').classList.remove('active');
});

document.getElementById('studentBtn').addEventListener('click', function() {
    document.getElementById('studentLogin').classList.add('active');
    document.getElementById('adminLogin').classList.remove('active');
});

//admin-login
 let adminloginBtn = document.getElementById('adminloginBtn'),
 adminloginBtn.addEventListener('click', () => {
  let email = document.getElementById('admin-login');
  let password = document.getElementById('admin-password');
  console.log(email.value, password.value);
 });
 
 // student-login
 let studentloginBtn = document.getElementById('studentloginBtn'),
 adminloginBtn.addEventListener('click', () => {
  let email = document.getElementById('studentemail');
  let password = document.getElementById('studentpassword');
  console.log(email.value, password.value);
 });
 