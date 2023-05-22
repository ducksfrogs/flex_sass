import "../style/styles.scss";

console.log('hello webpack');

import img1 from '../img/img1.jpg';
import workI from '../img/img2.jpg';
import workI2 from '../img/img3.jpg';
import workI3 from '../img/img4.jpg';
import workI4 from '../img/img6.jpg';
import workI5 from '../img/img5.jpg';
import workI6 from '../img/img6.jpg';

const hCornerI = document.createElement('img');
hCornerI.src = img1;
document.getElementById('header-corner__img').appendChild(hCornerI);

const workImg = document.createElement('img');
workImg.src = workI;
document.getElementById('card').appendChild(workImg);

const workImg2 = document.createElement('img');
workImg2.src = workI2;
document.getElementById('card2').appendChild(workImg2);

const workImg3 = document.createElement('img');
workImg3.src = workI3;
document.getElementById('card3').appendChild(workImg3);

const workImg4 = document.createElement('img');
workImg4.src = workI4;
document.getElementById('card4').appendChild(workImg4);

const workImg5 = document.createElement('img');
workImg5.src = workI5;
document.getElementById('card5').appendChild(workImg5);

const workImg6 = document.createElement('img');
workImg6.src = workI6;
document.getElementById('card6').appendChild(workImg6);

const hamburberContainer = document.querySelector('#header__main-nav');
const hamburber = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

hamburber.addEventListener('click', () => {
    hamburberContainer.classList.toggle("clicked");
    // links.forEach(link) => {
    //     link.classList.toggle('fade');
    // }
});