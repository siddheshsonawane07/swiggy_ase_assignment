import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const inputStringFromUser = async (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (inputString) => {
      resolve(inputString.trim());
    });
  });
};

const inputIntegerFromUser = async (promptMessage) => {
  try {
    const inputString = await new Promise((resolve) => {
      rl.question(promptMessage, (input) => {
        resolve(input.trim());
      });
    });

    const userInput = Number.parseInt(inputString, 10);
    if (!Number.isNaN(userInput) && Number.isSafeInteger(userInput)) {
      return userInput;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  rollDice,
  inputStringFromUser,
  inputIntegerFromUser,
};
