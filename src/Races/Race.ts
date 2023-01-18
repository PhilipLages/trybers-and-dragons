export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race._instanceCounter += 1;
  }

  static createdRacesInstances(): number {
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }
}