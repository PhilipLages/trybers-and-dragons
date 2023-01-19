import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighter1: Character;
  private _fighter2: Character;

  constructor(fighter1: Character, fighter2: Character) {
    super(fighter1);

    this._fighter1 = new Character(fighter1.name);
    this._fighter2 = new Character(fighter2.name);
  }
}