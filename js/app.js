'use strict'
//Находим элементы - карточка товаров (все).И добавляем каждой карточке товаров id,
//равно i-тому элементу. 
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
    let idNumber = i;
    cards[i].setAttribute('id', idNumber);
    console.log(cards[i]);
};

// Находим все кнопки на карточках товаров Add to Cart 
let buttonsCards = document.querySelectorAll(".card__add");
for (let i = 0; i < buttonsCards.length; i++) {
    let idNumberButton = i;
    buttonsCards[i].setAttribute('id', idNumberButton);
    console.log(buttonsCards[i]);
    buttonsCards.forEach(function(button) {
        button.addEventListener('click', addToCart)
    })
};

// Читаем свойство id и с его помощью добавляем товар в корзину

function addToCart(event) {
    let productId = event.currentTarget.getAttribute('id');
        addProductintocart(productId);
};