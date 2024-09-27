/*var usernumbr1 = +prompt('Enter hiebr number');
var usernumbr2 = +prompt('Enter base number');
function *fname(param) {
  // Tab to edit
}
*/
// Object 
var obj = {
  name: 'Eagle',
  age: '20',
  weight: ''
}

  //constructor function 
function Person (name,age) {
  this.userName = name;
  this.userAge = age;
}
var user1 = new Person ('Mujeeb', 29)
console.log(user1)
// Prototype
Person.prototype.gender = 'male'
Person.prototype.speack = function() {
  alert('Salam From Mujeeb')
} 
// data type we have 
// String
// Number
// Boolean
// undefined
// null
// Array
// Object

//undefined
var name ;

//null
console.log(typeof null)
var user = null;
if (true) {
  
} 
// 1. Primitive Data type 2. Non Primitive Data type 


// 1.set 2. get 3. remove 4. clear
localStorage.setItem ('myname','Mujeeb')
localStorage.getItem('myname')
var data = localStorage.getItem('myname')
console.log(data)

12/7 //handling of array with object

let usee = +prompt('enter your name');
let arr1 = [];
let arr2 = arr1.usee;
console.log(arr2);