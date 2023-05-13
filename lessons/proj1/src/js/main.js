import "../style/styles.scss";

console.log('hello webpack');

import img1 from '../img/img1.jpg';

const hCornerI = document.createElement('img');
hCornerI.src = img1;
document.getElementById('header-corner__img').appendChild(hCornerI);