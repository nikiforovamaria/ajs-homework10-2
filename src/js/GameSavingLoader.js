import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await await read();
    const value = await json(data);
    return new GameSaving(value);
  }
}
