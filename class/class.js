//Local Variables
/*function welcome () {
  var mssg = 'welcom to my new website'+'<br>'
  document.write(mssg)
}
welcome()
welcome()
welcome()
welcome()
//Global Variables
var newmsg = 'Pleas come again'
function request () {
  document.write(newmsg)
}
request()*/
/*var greettouser = 'welcom to (AlishWDev.com)'
alert(greettouser) 


// Switch statements 
var userinp = prompt('Enter your product name')
switch(userinp){
  case 'Baby shows':
  // var showssize =  prompt('wich size')
    alert('yes available')
    break
}
*/


// Math methods 
/*var studenp = 78.2
document.write(Math.round(studenp) + '<br>') 

var studen2p = 99.1
document.write(Math.ceil(studen2p) + '<br>')

var student3p = 86.3
document.write(Math.floor(student3p) + '<br>')

var randaam = (Math.random(0))

document.write(Math.round(randaam))*/


//Array methods Slice
/*var ar1 = ['Babar,Nadeem,Subhan,Jumma,Sahi,Ghani']
var ar2 = ar1.slice(0,2)
console.log(ar2)*/
/*var num = 5;

var resl = ++num + num++ + num + ++num - --num
//.         6.   +    6.     7.     8.     7
//.         6        12    19   +  27      20
document.write(resl)*/


//loops  for loops
/*var num = 1
for(i=1; i<=100; i++ ){
  document.write([i] + ')Mujeeb'+ '<br>')
}*/
/*for(i=1; i<=10; i++){
  document.write(3+'*' + [i] + '=' + 3*i + '<br>')
}
*/

   //loop for user input 
   /*var userinp1 = +prompt('enter value 1')
   var userinp1 = +prompt('enter value 2')
   for(i=userinp1; î)*/
   
   //while loop
   /*var num1 = 10;
   while ()
  [73773738,63733737,63738,63737,643738,5373828,637328837,637338,63738828,63738328,633727,]*/
   /*var ourlist = document.getElementById('list');
   var changingbtn = document.getElementById('btnchanger');
   changingbtn.addEventListener('click',function (){
     ourlist = 'www.naby modernlife.com'
   }
   )*/
   /*var userinpdate =prompt('Enter your date of birth')
   
   var currentdate = new Date().getTime()
   console.log(`${} '<br>' ${currentdate}`)*/
   /*function parachange() { 
     var website = 'www.AlishWDev.com'
     document.getElementById('para').innerHTML = website
     function changec() {
       document.getElementById('')
     }
     
    
   }*/
  /* var newform = document.getElementById('myform');
   var formbtn = document.getElementById('formfunc');
   formbtn.addEventListener('click', function() {
     newform.innerHTML = `<p><h1>Sindh Institute of Urology & Transplantation </h1><br><h2>Patient Registration Slip</h3></p>
     <p>Token# <input type="text"> <br> Visit Date <input type="text"> <br> Gender<input type="text">  MR# <input type="text"> <br> Patient Name <input type="text"> <br> CNIC:<input type="text"> <br> </p>`
   })
   var username = prompt('Pleas Enter Your Name');
   document.write(`Dear User ${username} please click the button to fulfill your form`)
   var formbtn1 = document.getElementById('formbtn');
   
   
   
   
   
   function image11() {
     var myimage = document.getElementById('image2');
     myimage.src ='/class/IMG_20240526_183744569.jpg'
   }*/
   // Normal Function 
   /*function mynewfn() {
     var msg = 'Mujeeb'
       console.log(msg)
   }
   mynewfn()*/
   //Arrow Function 
   /*var myarrow = (a, b) => {
     console.log(a*b)
   }
   myarrow(500, 100)*/
   // return value in arrow function
   var sum = (math, eng, phe, bio) => {
     var sumoft = math+eng+phe+bio;
     return sumoft;
   }
   console.log(sum(80, 76, 89, 74));
   var myinfo = (fname, lname)=> {
     var name = fname + ' ' + lname;
     return name;
   }
   console.log(myinfo('Mujeeb', 'Alish'));
   
   // second return method
   const count = (Bio, Math, Phys, sci)=> {
     var sumofva = Bio + Math + Phys + sci;
     
     return sumofva;
   }
    console.log(count(89, 78, 94, 69));
    //
    var total = function(tt) {
      var totl = sumofva/300 * 100;
      
    } 
    console .log(total(totl))
 
