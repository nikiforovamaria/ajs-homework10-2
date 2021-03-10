import GameSavingLoader from './GameSavingLoader';

console.log('worked');

(async () => {
  try {
    const game = await GameSavingLoader.load();
    console.log(game);
  } catch (e) {
    console.log(e);
  }
})();
