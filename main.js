'use strict'

//board
let a = document.querySelector('.boar');
function addBoard() {
    let board = document.createElement('table');
    board.classList.add('board');
    let arrNum = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 8; i > 0; i--) {
        let row = document.createElement('tr');
        let num = document.createElement('td');
        num.className = 'text';
        num.textContent = i;
        row.appendChild(num);
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement('td');
            cell.className = 'block';
            if (!(i % 2 == j % 2)) cell.style.backgroundColor = 'black';
            row.appendChild(cell);
        }
        board.appendChild(row)
    }
    let rowNum = document.createElement('tr');
    for (let i = 0; i < 9; i++) {
        let num = document.createElement('td');
        num.style.padding = '5px 0 0 0';
        num.style.textAlign = 'center';
        num.textContent = arrNum[i];
        rowNum.appendChild(num);
    }
    board.appendChild(rowNum)
    a.appendChild(board);
}

//basket
let productsList = {
    product: [{ name: 'Хлеб', price: 40 }, { name: 'Батон', price: 33 }, { name: 'Печеньки', price: 68 }],
    addProduct: function () {
        this.product.push(new Object({ name: prompt('Name?'), price: Number(prompt('Price')) }));
    },
    outConsole: function out() {
        console.log(this.product);
    }
}
let basket = {
    product: [],
    sumProduct: 0,
    add: function () {
        for (let i = 0, l = productsList.product.length; i < l; i++) {
            let quant = prompt('Сколько ' + productsList.product[i].name + ' возьмёте?');
            this.product.push(new Object({ name: productsList.product[i].name, quantity: quant, sum: quant * productsList.product[i].price }));
            this.sumProduct += this.product[i].sum;
        }
    },
    outConsole: function out() {
        console.log(this.product);
    },
    out: function () {
        let catalog = document.getElementById('catalog')
        if (this.sumProduct == 0) {
            catalog.insertAdjacentHTML("afterbegin", "<p> Корзина пуста!</p>");
        }
        else {
            let bas = document.createElement('tabel');
            let rowNum = document.createElement('tr');
            let num = ['Наименование', 'Колличество', 'Сумма']
            for (let i = 0; i < 3; i++) {
                let cell = document.createElement('td');
                cell.style.width = '30px';
                cell.textContent = num[i];
                rowNum.appendChild(cell);
            }
            bas.appendChild(rowNum);
            for (let i = 0; i < this.product.length; i++) {
                let row = document.createElement('tr');
                for (let ell in this.product[i]) {
                    let cell = document.createElement('td');
                    cell.style.width = '30px';
                    cell.textContent = this.product[i][ell];
                    row.appendChild(cell);
                }
                bas.appendChild(row);
            }
            let rowSum = document.createElement('tr');
            for (let i = 0; i < 3; i++) {
                let cell = document.createElement('td');
                cell.style.width = '30px';
                if (i == 0)
                    cell.textContent = 'Итог:';
                if (i == 2)
                    cell.textContent = this.sumProduct;
                rowSum.appendChild(cell);
            }
            bas.appendChild(rowSum);
            catalog.prepend(bas);
        }
    },
    start: function () {
        this.add();
        this.out();
        this.outConsole();
    }
}
