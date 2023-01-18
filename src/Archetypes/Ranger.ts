import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instanceCounter = 0;
  private _resource: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instanceCounter += 1;
    this._resource = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._resource;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCounter;
  }
}