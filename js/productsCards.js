'use strict'
// Объявляем переменную путь к картинке (общая папка с изображениями)
let imagePath = 'img';

// Указываем путь к конкретному файлу в папке catalog.products
let imageProductPath = `${imagePath}/catalog.products`;

// Находим div с классом .card-group, в который будем вставлять карточки с товарами
let cardGroupEl = document.querySelector('.card-group');
// console.log (cardGroupEl);

/**
 * Функция добавляет карточки товаров на страницу 
 * @param  products - это товары из массива (файл products.js)
 * @param cardGroupEl - это div с классом .cardGroupEl, куда вставляютстя карточки. 
 */
function insertCardsintoPage(products, cardGroupEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    cardGroupEl.insertAdjacentHTML("afterbegin", productsMarkup);
}

/**
 * Функция добавляет верстку для конкретного товара в карточке
 * @param {*} product это конкретный объект из массива products
 * @returns 
 */

function getProductMarkup(product) {
    return `
    <article class="card">
    <div class="card__img ">
        <img class="card__img--top " src="${imageProductPath}/${product.image}" alt="${product.name} ">
        <div class="card__overlay ">
            <button data-productId=${product.id} class="card__add "><img class="card-cart " src="img/cart_button.svg " alt="cart ">
            Add to Cart</button>
        </div>
    </div>
    <div class="card__text ">
        <a href="product.html ">
            <h4>${product.name}</h4>
            <p class="card__text--text ">${product.descripton}</p>
            <strong>$<span>${product.price}</span></strong>
        </a>
    </div>
</article>`
};

// Функция находит все кнопки Add To Cart и назначает им обработку клика

function addEventListenersForAddToCartButtons() {
    const buttonsCards = document.querySelectorAll('button[data-ProductId]');
    //    console.log (buttonsCards);
    buttonsCards.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    });
}

// Функция обрабатывает клик по каждой конкретной кнопке. 

function addedProductHandler(event) {
    let productId = event.currentTarget.getAttribute('data-ProductId');
    // console.log(productId);
    addProductIntoCart(productId);
}

insertCardsintoPage(products, cardGroupEl);
addEventListenersForAddToCartButtons();

