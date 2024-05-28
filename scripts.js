let slideIndex = 0;
let productIndex = 0;

const slides = document.querySelectorAll('.slide');
const products = document.querySelectorAll('.product');

const showSlides = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
    slideIndex = (slideIndex + 1) % slides.length;
};

const showProducts = () => {
    products.forEach((product, index) => {
        product.style.transform = `translateX(${100 * (index - productIndex)}%)`;
    });
    productIndex = (productIndex + 1) % products.length;
};

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides();
});

document.querySelector('.prev-product').addEventListener('click', () => {
    productIndex = (productIndex - 1 + products.length) % products.length;
    showProducts();
});

document.querySelector('.next-product').addEventListener('click', () => {
    showProducts();
});

setInterval(showSlides, 5000);
setInterval(showProducts, 5000);
