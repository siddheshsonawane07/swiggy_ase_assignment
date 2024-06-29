import { inputStringFromUser, inputIntegerFromUser } from "./src/utils.js";

const main = async () => {

  const inputPlayerDetails = async () => {
    const name = await inputStringFromUser("Enter Player's Name:  ");
    const health = await inputIntegerFromUser(`Enter ${name}'s health:  `);
    const attack = await inputIntegerFromUser(`Enter ${name}'s attack:  `);
    const strength = await inputIntegerFromUser(`Enter ${name}'s strength: `);

    return { name, health, attack, strength };
  };

  console.log("Game started");

  const { name, health, attack, strength } = await inputPlayerDetails();

  console.log(name, health, attack, strength);
  
};

main();
