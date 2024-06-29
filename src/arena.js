import Player from "./player.js";
import { rollDice } from "./utils.js";

class Arena {
  //array of player objects
  players = [];
  totalPlayers = 0;

  addPlayer(name, health, strength, attack) {
    const id = this.totalPlayers++; // Assign unique ID
    const player = new Player(id, name, health, strength, attack);
    this.players.push(player);
  }

  displayAllPlayers() {
    this.players.forEach((player) => {
      console.log(`Player ID: ${player.id}, Name: ${player.name}`);
    });
  }

  battle(player1Id, player2Id) {
    let attacker = this.players[player1Id];
    let defender = this.players[player2Id];

    // one with lower health will attack first
    if (defender.health < attacker.health) {
      [attacker, defender] = [defender, attacker];
    }

    console.log(`\n===== Battle: ${attacker.name} vs ${defender.name} =====`);

    while (attacker.health > 0 && defender.health > 0) {
      
      // Perform attack and defend actions
      this.performAttack(attacker, defender);

      if (defender.health <= 0) break;

      // Switch roles for the next round
      [attacker, defender] = [defender, attacker];
    }

    const winner = attacker.health > 0 ? attacker : defender;
    console.log(`${winner.name} wins the battle!\n`);
  }

  performAttack(attacker, defender) {
    const attackRoll = rollDice();
    const defendRoll = rollDice();

    const attackDamage = attacker.attack * attackRoll;
    const defendStrength = defender.strength * defendRoll;

    console.log(
      `${attacker.name} attacks with roll ${attackRoll} (${attackDamage} damage)`
    );
    console.log(
      `${defender.name} defends with roll ${defendRoll} (${defendStrength} strength)`
    );

    const damageTaken = Math.max(0, attackDamage - defendStrength);
    defender.health = Math.max(0, defender.health - damageTaken);

    console.log(
      `${defender.name} takes ${damageTaken} damage. Remaining health: ${defender.health}\n`
    );
  }
}

export { Arena };
