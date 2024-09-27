if(true){
 
  var secret = 'Mujeeb';
  console.log(secret);
}





// const constant 
const PI = 10.15;
console.log(PI)
//globalThisll)]


// Major difference




var nume1 = 10;
console.log(nume1)

let nume1 = 10;
console.log(nume1)

const nume1 = 10;
console.log(nume1)
// Variable scoping.1, Global variable or scope. exp
var globalVariable = 100;
console.log(globalVariable);
if (true) {
  console.log(globalVariable);
};
function globalvari() {
  console.log(globalVariable);
}
globalvari();
//exp2
if (true) {
  var blockscopeVariable = 100;
  console.log(blockscopeVariable)
}


// Laxicalscope 2.clojers 
function outerFunction() {
  var innerVariable = 100;
  function innerFunction() {
    var  = 
  }
}

function add(a, b) {
  return a+b;
  
}
const sum = add;
console.log(sum)


const  outerCounter = () => {
  var count = 0;
  return () => { 
    ++counnt
    return co
  }
}

// 3rd class
const parentfunc = () =>{
  var parentWorth = 100;
  function childfunc() {
    var totalNetworth = parentWorth += 100;
    return totalNetworth
  }
}
const result = parentfunc; // destroy parent function 100


// Template literals
var firstName = 'Ali';
var lastName = 'Huzaifa';
console.log(Mujeeb Developer+firstName+lastName);
console.log(`Mujeeb Developer`)
//Destruct
const arr1 = [1,2,3,4,5,6,7]

const arr1 = [1,2,3,4,5,6,7]
const [num1,num2,] = arr1;

const obj = {
  name 'Mujeeb'
  age 29
}
const {name, age } = obj;
console.log(name);
console.log(age)


const great = (userName = 'Mujeeb Developer') => {
  console.log(`Hello ${}`)
}


// last topic rest operator 
const sum = (... value) => {
  console.log(value)
}
sum(38366,3636366,63738238,[53727,63836,6372,])


// Spearad operator
const numbers = [1,2,3,4,5,6,7,];
console.log()