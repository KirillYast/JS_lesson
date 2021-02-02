
function sum(a, b) {
  var c = a - (-b);
  return console.log('a+b=', c);
}
function subtraction(a, b) {
  var c = a - b;
  return console.log('a-b=', c);
}
function multiplication(a, b) {
  a *= b
  return console.log('a*b=', a);
}
function division(a, b) {
  return console.log('a/b=', a / b);
}
function data() {

}
function arif(a, b, what) {
  if (what === '+')
    sum(a, b);
  else if (what === '-')
    subtraction(a, b);
  else if (what === '*')
    multiplication(a, b);
  else if (what === '/')
    division(a, b);
  else console.log('вы указали неверное действие')

}
let a = prompt('a');
let b = prompt('b');
let what = prompt(' Что с ними сделать +, - ,* ,/')
arif(a, b, what)