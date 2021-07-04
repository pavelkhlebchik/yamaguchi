import './index.scss';

import SenseiWalk from './assets/Female-2-Walk.png';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const characterStep = 10;
const shots = 3;
let cycle = 0;
let cyclePos = 0;
let bottomDownPressed = false;
let bottomUpPressed = false;
let bottomLeftPressed = false;
let bottomRightPressed = false;

let positionY = 0;
let positionX = 0;

const keyDownHandler = (evt) => {
  switch (evt.key) {
    case 'Down':
    case 'ArrowDown':
      bottomDownPressed = true;
      break;
    case 'Up':
    case 'ArrowUp':
      bottomUpPressed = true;
      break;
    case 'Left':
    case 'ArrowLeft':
      bottomLeftPressed = true;
      break;
    case 'Right':
    case 'ArrowRight':
      bottomRightPressed = true;
      break;
    default:
  }
};

const keyUpHandler = (evt) => {
  switch (evt.key) {
    case 'Down':
    case 'ArrowDown':
      bottomDownPressed = false;
      break;
    case 'Up':
    case 'ArrowUp':
      bottomUpPressed = false;
      break;
    case 'Left':
    case 'ArrowLeft':
      bottomLeftPressed = false;
      break;
    case 'Right':
    case 'ArrowRight':
      bottomRightPressed = false;
      break;
    default:
  }
};

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    const leftLimit = 0;
    const rightLimit = canvas.offsetWidth - spriteW;
    const upLimit = 0;
    const downLimit = canvas.offsetHeight - spriteH;

    if (leftLimit > positionX) {
      positionX = leftLimit;
    } else if (positionX > rightLimit) {
      positionX = rightLimit;
    } else if (upLimit > positionY) {
      positionY = upLimit;
    } else if (positionY > downLimit) {
      positionY = downLimit;
    }

    if (bottomDownPressed) {
      positionY += characterStep;
      cyclePos = 0;
      cycle = (cycle + 1) % shots;
    } else if (bottomUpPressed) {
      positionY -= characterStep;
      cyclePos = 144;
      cycle = (cycle + 1) % shots;
    } else if (bottomRightPressed) {
      positionX += characterStep;
      cyclePos = 96;
      cycle = (cycle + 1) % shots;
    } else if (bottomLeftPressed) {
      positionX -= characterStep;
      cyclePos = 48;
      cycle = (cycle + 1) % shots;
    }
    console.log(positionX);
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, cyclePos, spriteW, spriteH, positionX, positionY, 48, 48);
  }, 120);
});
