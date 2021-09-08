import './index.scss';

const $anImage = document.querySelector('.product__image--legs');
const $btnUp = document.querySelector('.product__btn--up');
const $btnDown = document.querySelector('.product__btn--down');

const moveImgUp = () => {
  $btnUp.addEventListener('click', () => {
    $anImage.style.top = `${-10}px`;
  });
};

const moveImgDown = () => {
  $btnDown.addEventListener('click', () => {
    $anImage.style.top = `${10}px`;
  });
};

moveImgUp();
moveImgDown();
