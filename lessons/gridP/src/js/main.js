import "../style/styles.scss";

console.log('hello webpack');

import car1 from '../img/carimg1.jpg';
import car2 from '../img/carimg2.jpg';
import car3 from '../img/carimg3.jpg';
import car4 from '../img/carimg4.jpg';

const imgCaro1 = document.createElement('img');
imgCaro1.src = car1;
document.getElementById('imgCar1').appendChild(imgCaro1);

const imgCaro2 = document.createElement('img');
imgCaro2.src = car2;
document.getElementById('imgCar2').appendChild(imgCaro2);

const imgCaro3 = document.createElement('img');
imgCaro3.src = car3;
document.getElementById('imgCar3').appendChild(imgCaro3);

const imgCaro4 = document.createElement('img');
imgCaro4.src = car4;
document.getElementById('imgCar4').appendChild(imgCaro4);

const list = document.querySelector('.gallery-carousel__img-container--list');
const imgs = Array.from(list.children);
const nextButton = document.querySelector('.gallery-carousel__btn--right');
const prevButton = document.querySelector('.gallery-carousel__btn--left');
const carouselNav = document.querySelector('.gallery-carousel__nav');
const dots = Array.from(carouselNav.children);


const imgWidth = imgs[0].getBoundingClientRect().width;
const setImgPosition = (img, index) => {
	img.style.left = imgWidth * index + 'px';
};
imgs.forEach(setImgPosition);

const moveToImg = (list, currentImg, targetImg) => {
	list.style.transform = 'translateX(-' + targetImg.style.left + ')';
	currentImg.classList.remove('current--img');
	targetImg.classList.add('current--img');
};

const updateDot = (currentDot, targetDot) => {
	currentDot.classList.remove('current--img');
	targetDot.classList.add('current--img');
};

const hideShowArrows = (imgs, prevButton, nextButton, targetIndx) => {
	if (targetIndx === 0) {
		prevButton.classList.add('hidden');
		nextButton.classList.remove('hidden');
	} else if (targetIndx === imgs.length -1) {
		prevButton.classList.remove('hidden');
		nextButton.classList.add('hidden');
		
	} else {
		prevButton.classList.remove('hidden');
		nextButton.classList.remove('hidden');
	};
};

nextButton.addEventListener('click', (e) =>{
	const currentImg = list.querySelector('.current--img');
	const nextImg = currentImg.nextElementSibling;
	const nextIndx = imgs.findIndex((img) => img === nextImg);

	const currentDot = carouselNav.querySelector(".current--img");
	const nextDot = currentDot.nextElementSibling;

	moveToImg(list, currentImg, nextImg);
	updateDot(currentDot, nextDot);
	hideShowArrows(imgs, prevButton, nextButton, nextIndx);
});

prevButton.addEventListener('click', (e) =>{
	const currentImg = list.querySelector('.current--img');
	const prevImg = currentImg.previousElementSibling;
	const prevIndx = imgs.findIndex((img) => img === prevImg);

	const currentDot = carouselNav.querySelector(".current--img");
	const prevDot = currentDot.previousElementSibling;
	moveToImg(list, currentImg, prevImg);
	updateDot(currentDot, prevDot);
	hideShowArrows(imgs, prevButton, nextButton, prevIndx);
});

carouselNav.addEventListener('click', (e) => {
	// const targetDot = e;
	// console.log(targetDot.target);
	const targetDot = e.target.closest('button');
	// console.log(targetDot);

	// console.log('function stops');
	if (!targetDot) return;
	const currentImg = list.querySelector('.current--img');
	const currentDot = carouselNav.querySelector('.current--img');

	const targetIndx = dots.findIndex((dot) => dot === targetDot);
	// console.log(targetIndx);
	const targetImg = imgs[targetIndx]

	moveToImg(list, currentImg, targetImg);
	updateDot(currentDot, targetDot);
	hideShowArrows(imgs, prevButton, nextButton, targetIndx);

});