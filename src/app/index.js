import '../../public/index.html'
import '../assets/style.scss'

//request animation frame

let position = 0;
let direction = 2;
function animateSquare() {
  const parent = document.querySelector('.square-animation-frame');
  const square = document.querySelector('.square-animation-frame > .square');


  position += direction;
  square.style.left = position + 'px';
  if (
    position >=
      parent.getBoundingClientRect().width -
        square.getBoundingClientRect().width ||
    position <= 0
  ) {
    direction *= -1;
  }
  requestAnimationFrame(animateSquare);
}
animateSquare();

//setTimeOut

let setTimeoutPosition = 0;
let setTimeoutDirection = 2;
let containerWidth = document
  .querySelector('.square__settimeout')
  .getBoundingClientRect().width;
var animationInterval = 6;
function animateSquareWithSetTimeout() {
  const square = document.querySelector('.square__settimeout > .square');
  const squareWidth = square.getBoundingClientRect().width;
  setTimeoutPosition += setTimeoutDirection;
  square.style.left = setTimeoutPosition + 'px';
  if (
    setTimeoutPosition >= containerWidth - squareWidth ||
    setTimeoutPosition <= 0
  ) {
    setTimeoutDirection *= -1;
  }
  setTimeout(animateSquareWithSetTimeout, animationInterval);
}
animateSquareWithSetTimeout();

//sort

// function bubbleSort(arr) {

  
//     for (let j = arr.length - 1; j > 0; j--) {
//       setTimeout(()=>{
//         for (let i = 0; i < j; i++) {
//           if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//           }
//         }
//       },0)

//     }
  
  
// }

// const createArray = (arrayLength) => {
//   const array = [];
//   while (array.length < arrayLength) {
//       array.push(Math.random())
//   } 
//   return array;
// }

// bubbleSort(createArray(100000))

// const button = document.querySelector('button');
// button.addEventListener('click', bubbleSort);

