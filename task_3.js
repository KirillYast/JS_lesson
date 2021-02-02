var a = prompt('a');
var b = prompt('b');
if (a >= 0 && b >= 0)
  console.log('a-b=', a - b);
else if (a < 0 && b < 0)
  console.log('a*b=', a * b);
else
  console.log('a+b=', Number(a) + Number(b));
