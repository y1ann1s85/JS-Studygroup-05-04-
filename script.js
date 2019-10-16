const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');

let firstTime = true;
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  if (firstTime) {
    carObject1.moveCar();
    carObject2.moveCar();
    firstTime = false;
  }
});

let stopped = false;
const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', () => {
  carObject1.stopCar();
  carObject2.stopCar();
  firstTime = true;
})

const restartBtn = document.getElementById('restart-button');
restartBtn.addEventListener('click', () => {
  carObject1.restartRace();
  carObject2.restartRace();
})

const speedUpCar1 = document.getElementById("gain-speed-car1");
speedUpCar1.addEventListener('click', () => {
  carObject1.gainSpeed();
})

const speedUpCar2 = document.getElementById("gain-speed-car2");
speedUpCar2.addEventListener('click', () => {
  carObject2.gainSpeed();
})

const speedDownCar1 = document.getElementById("reduce-speed-car1");
speedDownCar1.addEventListener('click', () => {
  carObject1.reduceSpeed();
})

const speedDownCar2 = document.getElementById("reduce-speed-car2");
speedDownCar2.addEventListener('click', () => {
  carObject2.reduceSpeed();
})

class Car {
  constructor(car, speed) {
    this.position = 0;
    this.speed = speed;
    this.stopped = false;
    this.car = car;
  }

  gainSpeed() {
    this.speed -= 20;
  }

  reduceSpeed() {
    this.speed += 20;
  }

  stopCar() {
    this.stopped = true;
  }

  moveCar() {
    if (this.stopped) return;
    if (this.position > 100) return;
    this.car.style.right = this.position + '%';
    this.position++;
    setTimeout(() => this.moveCar(), this.speed);
  }

  restartRace() {
    this.stopped = false;
    if (this.position > 100) return;
    this.car.style.right = this.position + '%';
    this.position++;
    setTimeout(() => this.moveCar(), this.speed);
  }

};

const carObject1 = new Car(car1, 300);
const carObject2 = new Car(car2, 300);
