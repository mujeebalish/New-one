/*let time = '9:00 pm'; (time <= 9'pm'? console.log('come in'): time >= '9:16'? console.log('not allowed') )*/
let userInput = +prompt('Enter your value');
let arr1 = [1,2,3,4,5,];
for(i=0, i<arr1.length, i++){
  if(userInput==arr1.length){
    document.write('your eligible');
    break
  }
}
