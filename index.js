import { inputStringFromUser, inputIntegerFromUser } from "./src/utils.js";
import { Arena } from "./src/arena.js";

const main = async () => {
  const inputPlayerDetails = async () => {
    const name = await inputStringFromUser("Enter Player's Name: ");
    const health = await inputIntegerFromUser(`Enter ${name}'s health: `);
    const attack = await inputIntegerFromUser(`Enter ${name}'s attack: `);
    const strength = await inputIntegerFromUser(`Enter ${name}'s strength: `);

    return { name, health, attack, strength };
  };

  const arena = new Arena();

  while (true) {
    console.log("\n===== Game Menu =====");
    console.log("1. Add Player");
    console.log("2. View Players");
    console.log("3. Battle");
    console.log("4. Exit");

    const choice = await inputIntegerFromUser("Enter your choice: ");

    switch (choice) {
      case 1:
        console.log("\nAdd Player:");
        const { name, health, attack, strength } = await inputPlayerDetails();
        arena.addPlayer(name, health, attack, strength);
        console.log("Player added successfully!");
        break;

      case 2:
        console.log("\nCurrent Players:");
        arena.displayAllPlayers();
        break;

      case 3:
        console.log("\nBattle:");
        console.log("Select players to battle:");
        const player1 = await inputIntegerFromUser("Enter Player 1 ID: ");
        const player2 = await inputIntegerFromUser("Enter Player 2 ID: ");
        arena.battle(player1, player2);
        break;

      case 4:
        console.log("\nExiting Game...");
        return;

      default:
        console.log("Invalid choice. Please enter a number from 1 to 4.");
    }
  }
};

main();
