import './style/test.css';
import './style/font.css';
import image from './assets/img/test.jpeg';

console.log('RADI!!!');

let img = document.createElement('img');
// img.src = './assets/test.jpeg';
img.src = image;
document.body.appendChild(img);
