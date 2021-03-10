import GameSavingLoader from '../GameSavingLoader';

test('1 - should return object', async () => {
  const game = await GameSavingLoader.load();
  expect(game).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});
