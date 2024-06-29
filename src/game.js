import { inputPlayerDetails, inputIntegerFromUser } from "./utils.js";
import { Arena } from "./arena.js";

class Game {
  constructor() {
    this.arena = new Arena();
  }

  displayMenu() {
    console.log("\n===== Game Menu =====");
    console.log("1. Add Player");
    console.log("2. View Players");
    console.log("3. Battle");
    console.log("4. Exit");
  }

  async handleMenuChoice(choice) {
    switch (choice) {
      case 1:
        console.log("\nAdd Player:");
        const { name, health, attack, strength } = await inputPlayerDetails();
        this.arena.addPlayer(name, health, attack, strength);
        console.log("Player added successfully!");
        break;

      case 2:
        console.log("\nCurrent Players:");
        this.arena.displayAllPlayers();
        break;

      case 3:
        if (this.arena.players.length < 2) {
          console.log("Not enough players to start a battle.");
          break;
        }

        console.log("\nBattle:");
        console.log("Select players to battle:");

        const player1 = await inputIntegerFromUser("Enter Player 1 ID: ");
        const player2 = await inputIntegerFromUser("Enter Player 2 ID: ");

        this.arena.battle(player1, player2);
        break;

      case 4:
        console.log("\nExiting Game...");
        process.exit();

      default:
        console.log("Invalid choice. Please enter a number from 1 to 4.");
    }
  }

  async run() {
    while (true) {
      this.displayMenu();
      const choice = await inputIntegerFromUser("Enter your choice: ");
      await this.handleMenuChoice(choice);
    }
  }
}

export default Game;
