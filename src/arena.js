import Player from "./player.js";

class Arena {
  players = [];
  totalPlayers = 0;

  addPlayer(name, health, strength, attack) {
    const id = this.totalPlayers++; // Assign unique ID
    const player = new Player(id, name, health, strength, attack);
    this.players.push(player);
    return id;
  }

  displayAllPlayers() {
    this.players.forEach((player) => {
      console.log(`Player ID: ${player.id}, Name: ${player.name}`);
    });
  }
}

export { Arena };
