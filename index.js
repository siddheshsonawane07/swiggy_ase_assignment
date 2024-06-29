import { inputStringFromUser, inputIntegerFromUser } from "./src/utils.js";
import { Arena } from "./src/arena.js";

const main = async () => {
  const arena = new Arena();

  const inputPlayerDetails = async () => {
    const name = await inputStringFromUser("Enter Player's Name:  ");
    const health = await inputIntegerFromUser(`Enter ${name}'s health:  `);
    const attack = await inputIntegerFromUser(`Enter ${name}'s attack:  `);
    const strength = await inputIntegerFromUser(`Enter ${name}'s strength: `);

    return { name, health, attack, strength };
  };

  while (true) {
    console.log("Game started");

    console.log("Add Player ");
    const { name, health, attack, strength } = await inputPlayerDetails();

    arena.addPlayer(name, health, attack, strength);

    arena.displayAllPlayers();

    const option = await inputStringFromUser(
      "Add another player? (yes/no): "
    );
    if (option.toLowerCase() !== "yes") {
      break; 
    }
  }
};

main();
