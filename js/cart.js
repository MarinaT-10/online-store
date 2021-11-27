'use strict'


let cartproduct = document.querySelector('.cartproduct');
console.log(cartproduct);
let cartproductBottom = document.querySelector('.cartproduct__bottom');
console.log(cartproductBottom);
let cartproductSum = document.querySelector('.cart__hidden');
console.log(cartproductSum);

// при клике на иконку корзины в header открываетс скрытый список корзины
let cartHeader = document.querySelector('.headerCart__wrap');
cartHeader.addEventListener('click', function(cart) {
    cartproduct.classList.toggle('hidden');
});

let cartCounterEl = cartHeader.querySelector('span');

// Функция добавляет товары по ID в корзину 

function addProductintocart(productId) {
    cartCounterPlus();
    addProductIdObject(productId);
    console.log (productId);
}

// Функция увеличивает счетчик товаров в корзине при клике на кнопку Add to Cart
function cartCounterPlus() {
    cartCounterEl.textContent++;
}

// Создаем временный объект, где будет храниться количество товаров, 
//добавленных в корзину. 
let cartObject = {};

//Фнукция проверяте, есть ли в корзине добавленный товар. Если нет, 
//то товар добавляется, а если есть, то количество таких товаров
//увеличивается на единицу. 

function addProductIdObject(productId) {

if (!(productId in cartObject)) {
    cartHeader[productId] = 1;
} else {
    cartHeader[productId]++;
}   
}




