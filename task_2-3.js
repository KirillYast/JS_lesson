let a = [{ name: 'Хлеб', price: 40, quantity: 0 }, { name: 'Батон', price: 33, quantity: 0 }, { name: 'Печеньки', price: 68, quantity: 0 }];
for (i = 0; i < a.length; i++) {
    a[i].quantity = prompt(a[i].name + ' ' + a[i].price + 'руб.');
    console.log(a[i].name, a[i].quantity);
}
function countBasketPrice() {
    let sum = 0;
    for (i = 0; i < a.length; i++) {
        sum += a[i].price * a[i].quantity;
    }
    return sum;
}
console.log('Сумма:', countBasketPrice());