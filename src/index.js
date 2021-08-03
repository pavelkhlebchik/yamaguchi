import './index.scss';
import ClientGame from './client/ClientGame';
// import playerName from './client/ClientPlayer';

document.getElementById('start-btn').addEventListener('click', (evt) => {
  evt.preventDefault();
  ClientGame.init({
    tagId: 'game',
  });
  document.querySelector('.start-game').classList.remove('start-game');
});
