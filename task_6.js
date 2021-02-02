let val = prompt('Число');
let pow = prompt('Степень');
function qrt(val, pow) {

  if (pow > 1) {
    --pow;
    val = val * qrt(val, pow);
    return val;
  }
  else if (pow == 1) return val;
  else console.log('Указали неверную степень');
}
val = qrt(val, pow);
console.log('результат', val);