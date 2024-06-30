import Game from "./src/game.js";

// Mock functions with two different players
const mockInputPlayerDetails = async (playerNumber) => {
  if (playerNumber === 1) {
    return {
      name: "TestPlayer1",
      health: 100,
      attack: 20,
      strength: 15,
    };
  } else {
    return {
      name: "TestPlayer2",
      health: 120,
      attack: 25,
      strength: 18,
    };
  }
};

let playerAddCount = 0;
const mockInputPlayerDetailsSequenced = async () => {
  playerAddCount += 1;
  return mockInputPlayerDetails(playerAddCount);
};

const mockInputIntegerFromUser = async (message) => {
  if (message.includes("Enter Player 1 ID:")) return 0;
  if (message.includes("Enter Player 2 ID:")) return 1;
  if (message.includes("Enter your choice:")) return 1;
  return 0;
};

// Creating a TestGame class that extends the original Game class for testing purposes
class TestGame extends Game {
  constructor() {
    super();
    this.inputPlayerDetails = mockInputPlayerDetailsSequenced;
    this.inputIntegerFromUser = mockInputIntegerFromUser;
  }

  // Override handleMenuChoice to use mock functions
  async handleMenuChoice(choice) {
    switch (choice) {
      case 1:
        const { name, health, attack, strength } =
          await this.inputPlayerDetails();
        this.arena.addPlayer(name, health, attack, strength);
        console.log("Player added successfully!\n");
        break;

      case 2:
        console.log("\nCurrent Players:");
        this.arena.displayAllPlayers();
        console.log();
        break;

      case 3:
        if (this.arena.players.length < 2) {
          console.log("Not enough players to start a battle.\n");
          break;
        }

        console.log("\nBattle:");
        const player1 = await this.inputIntegerFromUser("Enter Player 1 ID: ");
        const player2 = await this.inputIntegerFromUser("Enter Player 2 ID: ");
        this.arena.battle(player1, player2);
        console.log();
        break;

      case 4:
        console.log("\nExiting Game...\n");
        process.exit();

      default:
        console.log("Invalid choice. Please enter a number from 1 to 4.\n");
    }
  }
}

//Main Test Function
const Test = async () => {
  const game = new TestGame();

  // Test displayMenu
  console.log("Testing displayMenu: Test Case 1");
  try {
    game.displayMenu();
    console.log();
    console.log("Test Case 1 passed\n");
  } catch (e) {
    console.log("Test Case 1 failed\n");
  }

  // Test handleMenuChoice for adding the first player
  console.log();
  console.log(
    "Testing handleMenuChoice for adding the first player: Test Case 2\n"
  );
  await game.handleMenuChoice(1);
  if (
    game.arena.players.length === 1 &&
    game.arena.players[0].name === "TestPlayer1"
  ) {
    console.log("Test Case 2 passed\n");
  } else {
    console.log("Test Case 2 failed\n");
  }

  // Test handleMenuChoice for adding the second player
  console.log();
  console.log(
    "Testing handleMenuChoice for adding the second player: Test Case 3\n"
  );
  await game.handleMenuChoice(1);
  if (
    game.arena.players.length === 2 &&
    game.arena.players[1].name === "TestPlayer2"
  ) {
    console.log("Test Case 3 passed\n");
  } else {
    console.log("Test Case 3 failed\n");
  }

  // Test handleMenuChoice for viewing players
  console.log();
  console.log("Testing handleMenuChoice for viewing players: Test Case 4\n");
  try {
    await game.handleMenuChoice(2);
    console.log("Test Case 4 passed\n");
  } catch (e) {
    console.log("Test Case 4 failed\n");
  }

  // Test handleMenuChoice for battling
  console.log();
  console.log(
    "Testing handleMenuChoice for battling with enough players: Test Case 5\n"
  );
  try {
    await game.handleMenuChoice(3);
    console.log("Test Case 5 passed\n");
  } catch (e) {
    console.log("Test Case 5 failed\n");
  }

  // Test handleMenuChoice for exiting the game
  console.log();
  console.log("Testing handleMenuChoice for exiting the game: Test Case 6\n");
  //   let exited = false;
  //   process.exit = () => {
  //     exited = true;
  //   };
  await game.handleMenuChoice(4);
  //   if (exited) {
  console.log("Test Case 6 passed");
  //   } else {
  //     console.log("Test Case 6 passed");
  //   }

  console.log("All tests completed!");
};

Test();
