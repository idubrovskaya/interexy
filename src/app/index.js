/* eslint-disable no-use-before-define */
import '../../public/index.html';

import '../assets/style.scss';

// request animation frame

let position = 0;
let direction = 2;
function animateSquare() {
  const parent = document.querySelector('.square-animation-frame');
  const square = document.querySelector('.square-animation-frame > .square');

  position += direction;
  square.style.left = `${position}px`;
  if (
    position
      >= parent.getBoundingClientRect().width
        - square.getBoundingClientRect().width
    || position <= 0
  ) {
    direction *= -1;
  }
  requestAnimationFrame(animateSquare);
}
animateSquare();

// setTimeOut

let setTimeoutPosition = 0;
let setTimeoutDirection = 2;
const containerWidth = document
  .querySelector('.square__settimeout')
  .getBoundingClientRect().width;
const animationInterval = 6;
function animateSquareWithSetTimeout() {
  const square = document.querySelector('.square__settimeout > .square');
  const squareWidth = square.getBoundingClientRect().width;
  setTimeoutPosition += setTimeoutDirection;
  square.style.left = `${setTimeoutPosition}px`;
  if (
    setTimeoutPosition >= containerWidth - squareWidth
    || setTimeoutPosition <= 0
  ) {
    setTimeoutDirection *= -1;
  }
  setTimeout(animateSquareWithSetTimeout, animationInterval);
}
animateSquareWithSetTimeout();

// sort

// const createArray = (arrayLength) => {
//   const array = [];
//   while (array.length < arrayLength) {
//       array.push(Math.random())
//   }
//   return array;
// }

const button = document.getElementById('button');
// button.addEventListener('click', bubbleSort(Array.from({length: 100000},
// () => Math.floor(Math.random() * 100000))));
// button.addEventListener('click', selectionSort(Array.from({length: 100000},
// () => Math.floor(Math.random() * 100000))));
button.addEventListener('click', () => {
  const worker = new Worker(new URL('./worker.js', import.meta.url));

  const arr1 = Array.from(
    { length: 100000 },
    () => Math.floor(Math.random() * 100000),
  );
  const arr2 = Array.from(
    { length: 100000 },
    () => Math.floor(Math.random() * 100000),
  );

  worker.postMessage({ arr1, arr2 });

  worker.onmessage = messages;
});

function messages(event) {
  console.log(event.data);
}

// svg

// document.body.innerHTML = '<a class="my-house-link" href="#"> my house </a>';
