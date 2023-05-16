import "../style/styles.scss";

console.log('hello webpack');

import img1 from '../img/img1.jpg';

const hCornerI = document.createElement('img');
hCornerI.src = img1;
document.getElementById('header-corner__img').appendChild(hCornerI);


const hamburberContainer = document.querySelector('#header__main-nav');
const hamburber = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

hamburber.addEventListener('click', () => {
    hamburberContainer.classList.toggle("clicked");
    // links.forEach(link) => {
    //     link.classList.toggle('fade');
    // }
});