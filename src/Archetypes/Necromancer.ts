import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instanceCounter = 0;
  private _resource: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._instanceCounter += 1;
    this._resource = 'mana';
  }

  public get energyType(): EnergyType {
    return this._resource;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCounter;
  }
}