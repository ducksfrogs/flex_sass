import "../style/styles.scss";

console.log('hello webpack');

import img from '../img/img1.jpg';

const imgJpg = document.createElement('img');
imgJpg.src = img
document.getElementById('box').appendChild(imgJpg)