import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    (async () => {
      try {
        const data = await read();
        const value = await json(data);
        return value;
      } catch (e) {
        return e;
      }
    })();
  }
}
