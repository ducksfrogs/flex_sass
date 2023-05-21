import "../style/styles.scss";

console.log('hello webpack');

import imgTest from '../img/ducklings.jpg';

const testImg = document.createElement('img');
testImg.src = imgTest;
document.getElementById('testI').appendChild(testImg);