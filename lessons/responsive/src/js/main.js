import "../style/styles.scss";

console.log('hello webpack') ;

import img1 from '../img/img1.jpg';
import img2 from '../img/ducklings.jpg';


const imgOne = document.createElement('img');
imgOne.src = img1;
document.getElementById('test-i').appendChild(imgOne);

const imgDuck = document.createElement('img');
imgDuck.src = img2;
document.getElementById('duck').appendChild(imgDuck);