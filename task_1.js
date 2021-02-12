let number = prompt('Введите число');
function digitOfANumber(number) {
    let digit = { еденицы: 1, десятки: 1, сотни: 1 };
    if (number < 0) number *= -1;
    if (number > 999) {
        console.log('Число больше 3-х разрядов');
        return digit = {};
    }
    else {
        for (var key in digit) {
            digit[key] = 0;
            for (; !(number % 10 == 0); number--) {
                digit[key] += 1;
            }
            number /= 10;
        }
        return digit;
    }
}
let digit = digitOfANumber(number);
keysMas = Object.keys(digit);
for (i = 0; i < keysMas.length; i++) {
    console.log(keysMas[i] + ':' + digit[keysMas[i]]);
}
