import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instanceCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instanceCounter;
  }
}