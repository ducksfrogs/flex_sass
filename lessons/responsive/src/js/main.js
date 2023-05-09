import "../style/styles.scss";

console.log('hello webpack') ;

import img1 from '../img/img1.jpg';


const imgOne = document.createElement('img');
imgOne.src = img1;
document.getElementById('test-i').appendChild(imgOne);