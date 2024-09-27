/*var today = new Date("28/5/2024")
var fff = Math.floor(today/(60*60*1000*24)*1)
document.write(today)*/
/*function user() {
  document.write('mujeeb')
}
setTimeout(user,5000)*/
/*function greet (name,callback){
  var salamtouser = 'Assalam Alikum'+name 
  callback(salamtouser)
}
function massage (response) {
  document.write('response',response)
}
greet('aleem',massage)*/
let year = new Date();
let mounth = new Date().getMonth();
let currentDate = new Date().getDate()
let currentDay = new Date().getDay();
console.log(`${year.toDateString()}
 ${mounth}${currentDate}${currentDay}`);
