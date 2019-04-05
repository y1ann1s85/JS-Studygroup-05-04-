// const car = document.getElementById('car');
// car.style.right = '100%';

// first step: display 1, 2, ... 100
// Second step: display 1%, 2%,..., 100%
// Last step: set the right position from 1%, ..., to 100%


// for(let i = 0; i <= 90; i++) {
//   setTimeout(() => {
//     car.style.right = i + '%';
//   }, 200*i)
// }

// const car2 = document.getElementById('car2');
// function moveCar(position) {
//   if (position > 100) return;
//   car2.style.right = position + '%';
//   setTimeout(() => moveCar(position + 1), 200);
// }
// moveCar(0);

// let myButton = document.getElementById("btn");

// myButton.addEventListener("click", function () {
//     // console.log("Clicked");
//     for(let i = 0; i <= 90; i++) {
//         setTimeout(() => {
//           car.style.right = i + '%';
//         }, 200*i)
//       }
      
//       const car2 = document.getElementById('car2');
//       function moveCar(position) {
//         if (position > 100) return;
//         car2.style.right = position + '%';
//         setTimeout(() => moveCar(position + 1), 200);
//       }
//       moveCar(0);
// });

const car = document.getElementById('car');
car.style.right = '1%';

// first step: display 1, 2, ... 100
// Second step: display 1%, 2%,..., 100%
// Last step: set the right position from 1%, ..., to 100%

const startButton = document.getElementById('start-button');

let firstTime = true;
startButton.addEventListener('click', () => {
  if(firstTime) {
    stopped = false;
    moveCar(0);
    firstTime = false;
  }
});

let stopped = false;
const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', () => {
    stopped = true;
});

function moveCar(position) {
  if (position > 100 || stopped) return;
  car.style.right = position + '%';
  setTimeout(() => moveCar(position + 1), 200);
}