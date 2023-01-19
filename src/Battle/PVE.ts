import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _enemies: SimpleFighter[] | Monster[] | Fighter[];

  constructor(
    player: Fighter, 
    monsters: SimpleFighter[] | Monster[] | Fighter[],
  ) {
    super(player);
    this._fighter = player;
    this._enemies = monsters;
  }

  fight(): number {
    const startBattles = () => {
      const enemies = this._enemies.map((enemy) => {
        enemy.receiveDamage(this._fighter.strength);
  
        this._fighter.receiveDamage(enemy.strength);
  
        return enemy;
      });

      return enemies;
    };

    const enemiesAfterBattles = startBattles();
    
    const isEveryMonsterDead = enemiesAfterBattles
      .every((enemy) => enemy.lifePoints === -1);

    if (isEveryMonsterDead) {
      return 1;
    } 

    return super.fight();
  }
}