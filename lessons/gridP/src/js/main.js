import "../style/styles.scss";

console.log('hello webpack');

import car1 from '../img/carimg1.jpg';
import car2 from '../img/carimg2.jpg';
import car3 from '../img/carimg3.jpg';


const imgCaro1 = document.createElement('img');
imgCaro1.src = car1;
document.getElementById('imgCar1').appendChild(imgCaro1);

const imgCaro2 = document.createElement('img');
imgCaro2.src = car2;
document.getElementById('imgCar2').appendChild(imgCaro2);

const imgCaro3 = document.createElement('img');
imgCaro3.src = car3;
document.getElementById('imgCar3').appendChild(imgCaro3);

const list = document.querySelector('.gallery-carousel__img-container--list');
const imgs = Array.from(list.children);
const nextButton = document.querySelector('.gallery-carousel__btn--right');
const prevButton = document.querySelector('.gallery-carousel__btn--left');
const caroselNav = document.querySelector('.gallery-carousel__nav');
const dots = Array.from(caroselNav.children);




// console.log(prevButton);
// console.log(prevButton);

const imgWidth = imgs[0].getBoundingClientRect().width;

	// function setImagePosition(img, index){
	// 	img.style.left = imgWidth * index + 'px';
	// }

const setImgPosition = (img, index) => {
	img.style.left = imgWidth * index + 'px';
};

imgs.forEach(setImgPosition);

const moveToImg = (list, currentImg, targetImg) => {
	list.style.transform = 'translateX(-' + targetImg.style.left + ')';
	currentImg.classList.remove('current--img');
	targetImg.classList.add('current--img');
};

nextButton.addEventListener('click', (e) =>{
	const currentImg = list.querySelector('.current--img');
	const nextImg = currentImg.nextElementSibling;

	moveToImg(list, currentImg, nextImg)

});

