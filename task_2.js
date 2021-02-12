
let productsList = {
    product: [{ name: 'Хлеб', price: 40 }, { name: 'Батон', price: 33 }, { name: 'Печеньки', price: 68 }],
    addProduct: function () {
        this.product.push(new Object({ name: prompt('Name?'), price: Number(prompt('Price')) }));
    },
    outConsole: function out() {
        console.log(this.product);
    }
}
let bassket = {
    product: [],
    sumProduct: 0,
    add: function () {
        for (i = 0, l = productsList.product.length; i < l; i++) {
            let quant = prompt('Сколько ' + productsList.product[i].name + ' возьмёте?');
            this.product.push(new Object({ name: productsList.product[i].name, quantity: quant, sum: quant * productsList.product[i].price }));
            this.sumProduct += this.product[i].sum;
        }
    },
    outConsole: function out() {
        console.log(this.product);
    }
}
bassket.add();
bassket.outConsole();
console.log(bassket.sumProduct);
