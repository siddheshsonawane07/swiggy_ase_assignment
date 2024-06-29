import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rollDice = () => Math.floor(Math.random() * 6) + 1;

// Function to get a string input from the user
const inputStringFromUser = async (prompt) => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (inputString) => {
      const trimmedString = inputString.trim();
      const isValid = /^[a-zA-Z\s]+$/.test(trimmedString);
      if (isValid) {
        resolve(trimmedString);
      } else {
        console.log("Invalid input. Please enter valid string.");
        reject(new Error("Invalid input"));
      }
    });
  });
};

// Function to get a number input from the user
const inputIntegerFromUser = async (promptMessage) => {
  return new Promise((resolve, reject) => {
    rl.question(promptMessage, (input) => {
      const userInput = Number.parseInt(input.trim(), 10);
      if (!Number.isNaN(userInput) && Number.isSafeInteger(userInput)) {
        resolve(userInput);
      } else {
        console.log("Invalid input. Please enter a valid integer.");
        reject(new Error("Invalid input"));
      }
    });
  });
};

// Function to input details of a player
const inputPlayerDetails = async () => {
  const name = await inputStringFromUser("Enter Player's Name: ");
  const health = await inputIntegerFromUser(`Enter ${name}'s health: `);
  const attack = await inputIntegerFromUser(`Enter ${name}'s attack: `);
  const strength = await inputIntegerFromUser(`Enter ${name}'s strength: `);

  if (!name || health <= 0 || attack <= 0 || strength <= 0) {
    console.log("Invalid player details. Please enter valid values.");
    // Recursively call inputPlayerDetails for valid input
    return inputPlayerDetails();
  }

  return { name, health, attack, strength };
};

export {
  rollDice,
  inputStringFromUser,
  inputIntegerFromUser,
  inputPlayerDetails,
};
