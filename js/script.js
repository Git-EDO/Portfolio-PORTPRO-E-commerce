// Выпадающее меню

let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.menu__list');
let body = document.querySelector('body');
let navMenu = document.querySelector('.nav__menu');

burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('lock');
}

menu.onclick = function() {
    body.classList.remove('lock');
    burger.classList.remove('active');
    menu.classList.remove('active');
    navMenu.classList.remove('active');
}

// Управление скроллом страницы

let headerScroll = document.getElementById('main');
let advantageScroll = document.getElementById('advantage');
let saleScroll = document.getElementById('sale');
let productsScroll = document.getElementById('products');
let galleryScroll = document.getElementById('gallery');
let footerScroll = document.getElementById('footer');

headerScroll.addEventListener ('click', function() {
    const headers = document.querySelector('header');
    headers.scrollIntoView({block: "start", behavior: "smooth"});
})
advantageScroll.addEventListener ('click', function() {
    const advantages = document.querySelector('.advantage1');
    advantages.scrollIntoView({block: "start", behavior: "smooth"});
})
saleScroll.addEventListener ('click', function() {
    const sales = document.querySelector('.sale1');
    sales.scrollIntoView({block: "start", behavior: "smooth"});
})
productsScroll.addEventListener ('click', function(scrollToProducts) {
    const products = document.querySelector('.product1');
    products.scrollIntoView({block: "start", behavior: "smooth"});
})
galleryScroll.addEventListener ('click', function() {
    const galleries = document.querySelector('.gallery1');
    galleries.scrollIntoView({block: "start", behavior: "smooth"});
})
footerScroll.addEventListener ('click', function() {
    const footers = document.querySelector('footer');
    footers.scrollIntoView({block: "start", behavior: "smooth"});
})

// Таймер для акции

let date = new Date('Jul 17 2022 19:15:00');

function counts() {
    let now = new Date();
    gap = date - now;

    let hours = Math.floor(gap / 1000 / 60 / 60);
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    if(gap < 0) {
        hours += 24;
        minutes += 60;
        seconds += 60;
    } 

    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;

}

counts();

setInterval(counts, 1000);

// Попап окно иконки корзины

let popup = document.querySelector('.cart__popup');
let popupContent = document.querySelector('.popup__body');
let popupOpen = document.querySelector('.icon-cart');
let popupClose = document.querySelector('.popup__close');

popupOpen.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add('active');
    body.classList.toggle('lock');
    popupContent.classList.add('active');
})

popupClose.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('active');
    body.classList.remove('lock');
    popupContent.classList.remove('active');
})

// Скролл к товарам

let popupButton = document.querySelector('.scrollToProducts');

popupButton.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('active');
    body.classList.remove('lock');
    popupContent.classList.remove('active');

    const products = document.querySelector('.product1');
    products.scrollIntoView({block: "start", behavior: "smooth"});
})

// Показ дополнительных товаров

let clickBlock = document.querySelector('.addProducts');
let product10 = document.querySelector('.product10');
let product11 = document.querySelector('.product11');
let product12 = document.querySelector('.product12');
let product13 = document.querySelector('.product13');

clickBlock.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.click-block').style.display = 'none';
    product10.style.display = 'flex';
    product11.style.display = 'flex';
    product12.style.display = 'flex';
    product13.style.display = 'flex';
});
