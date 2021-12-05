'use strict'
// Находим элемент счетчика возле корзинки 
let cartHeader = document.querySelector('.headerCart__wrap');
let cartCounterEl = cartHeader.querySelector('span');
// Находим на странице иконку корзинки. 
let openCart = document.querySelector('.headerCart__wrap');
// Находим скрытый элемент содержимого корзины 
let cartproduct = document.querySelector('.cartproduct');
// Находим элемент, отвечающий за общую сумму одного товара в корзине. 
let cartTotalEl = document.querySelector('.cartproduct__bottom');
// Находим элемент, отвечающий за общую сумму ВСЕХ товаров в корзине. 
let cartTotalSumEl = document.querySelector('.cart__hidden')


//Создаем временный объект, где будет храниться количество товаров, 
//добавленных в корзину.
let cartObject = {};

// При клике на иконку корзины в header открываетс скрытый список корзины

openCart.addEventListener('click', function () {
    cartproduct.classList.toggle('hidden');
});

// Функция работает, когда при клике на кнопку Add To Cart добавляют товар в корзину
function addProductIntoCart(productId) {
    cartCounterPlus();
    addProductIdToObject(productId);
    // console.log(productId);
    renderProductInCart(productId);
    calculateAndRenderTotalCartSum();
}
// Функция отрисовывает товар в корзине или добавляет количество товаров, если таковой товар в корзине уже есть
function renderProductInCart(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInCart(productId);
    }
}
// Функция увеличивает сумму конкретного товара в корзине при добавлении нескольких штук
function recalculateSumForProduct(productId) {
    let productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (cartObject[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

// Функция увеличивает количество конкретного товара в корзине при добавлении нескольких штук
function increaseProductCount(productId) {
    let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

// Функция отрисовывает строку с добавленным в корзину товаром 
function renderNewProductInCart(productId) {
    let ProductRow = `
<div class="cartRow">
    <div>${products[productId].name}</div>
    <div>
        <span class="productCount" data-productId="${productId}">1</span>
        шт.
    </div>
    <div>$${products[productId].price}</div>
    <div>$
        <span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
    </div>
</div>`
    cartTotalEl.insertAdjacentHTML('beforeBegin', ProductRow);
}

// Функция считает общую сумму товаров в корзине 
function calculateAndRenderTotalCartSum() {
    let totalSum = 0;
    for (let productId in cartObject) {
        totalSum += cartObject[productId] * products[productId].price;
    }
    cartTotalSumEl.textContent = totalSum.toFixed(2);
}

// Эта функция добавляет товары в объект cartObject
function addProductIdToObject(productId) {

    if (!(productId in cartObject)) {
        cartObject[productId] = 1;
    } else {
        cartObject[productId]++;
    }
}

// Эта функция увеличивает счетчик на корзинке в соответствии с числом кликов на кнопке Add to Cart 
function cartCounterPlus() {
    cartCounterEl.textContent++;
}