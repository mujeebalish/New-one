/*var inpele = document.getElementById('todo');
var btnEle = document.getElementById('btntodo');
var h1lele = document.createElement('h1');
var textele = document.createTextNode('Mujeeb Alish');
var h1elem = h1lele.appendChild(textele);
document.getElementById('text').appendChild(h1elem)
console.log(h1lele);
console.log(textele);
document.write(h1lele)*/
let userInput = +prompt('Enter your value');
let arr1 = [1,2,3,4,5,];
for(i=0; i<arr1.length; i++){
  if(userInput==arr1[i]){
    document.write('your eligible');
    break
  }
  else {
    document.write('your not eligible <br>');
  }
}