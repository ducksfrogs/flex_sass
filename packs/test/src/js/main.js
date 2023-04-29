import "../style/styles.scss";

console.log('hello webpack');

import img from '../img/img1.jpg';
import img2 from '../img/img2.jpg'

const imgJpg = document.createElement('img');
imgJpg.src = img;
document.getElementById('box').appendChild(imgJpg);

const img2Jpg = document.createElement('img');
img2Jpg.src = img2;
document.getElementById('Img2').appendChild(img2Jpg);