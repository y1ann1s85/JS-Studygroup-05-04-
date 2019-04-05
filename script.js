const car = document.getElementById('car');
car.style.right = '100%';

// first step: display 1, 2, ... 100
// Second step: display 1%, 2%,..., 100%
// Last step: set the right position from 1%, ..., to 100%


for(let i = 0; i <= 90; i++) {
  setTimeout(() => {
    car.style.right = i + '%';
  }, 200*i)
}

const car2 = document.getElementById('car2');
function moveCar(position) {
  if (position > 100) return;
  car2.style.right = position + '%';
  setTimeout(() => moveCar(position + 1), 200);
}
moveCar(0);