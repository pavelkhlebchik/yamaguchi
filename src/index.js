import './index.scss';

import SenseiWalk from './assets/Female-2-Walk.png';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    cycle = (cycle + 1) % shots;
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, 0, 0, 100, 100);
  }, 120);
});
