var para = document.getElementById('para');
var input = document.getElementById('input');
var btn = document.getElementById('numberBtn');
btn.addEventListener('click', () => {
for (var i = 0; i < input.length; i++) {
if (i[0] === '-') {
  para.innerHTML = 'the number is Negative'
}
else if (i[0] === '+') {
para.innerHTML = ' the number is Positive'
}
else {
  alert('Please enter a number')
}
}
}) 