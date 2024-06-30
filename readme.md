# Battle Arena Game

## Description

This project is a text-based battle arena game where players can enlist themselves, view existing participants, and engage in epic battles. Each player possesses unique attributes such as health, strength, and attack power, influencing the outcome of their clashes.

## Files

- `index.js`: Primary entry point for launching the game.
- `game.js`: Defines the `Game` class responsible for orchestrating game flow, managing menus, and processing user interactions.
- `arena.js`: Contains the `Arena` class that oversees player management, including adding new contenders, displaying the current roster, and orchestrating intense battles.
- `player.js`: Establishes the `Player` class, encapsulating individual attributes like health, strength, and attack capability.
- `utils.js`: Provides essential utility functions for handling user inputs (`inputStringFromUser`, `inputIntegerFromUser`, `inputPlayerDetails`) and simulating random events (`rollDice`).

## Architecture

The game is built with these components:

- **Game Class**: Handles game progression, presents intuitive menus, and interprets user commands.
- **Arena Class**: Manages the dynamic roster of players, offering functionalities to add new participants and oversee their engagements in thrilling battles.
- **Player Class**: Represents each participant in the arena with distinctive attributes crucial to their success in combat.
- **Utility Functions**: Essential tools found in `utils.js` for streamlining user inputs and injecting unpredictability through dice rolling mechanisms.

## Installation

Make sure Node.js (version 20.10.0 or later) is installed on your computer.

1. Clone this repository:
2. Navigate to the project directory:
3. To start the game, run `node index.js` or `npm start` in your terminal. Follow the prompts to add players, view players and their stats, start battles, and exit.

## How to Play

1. **Join as a Player**: Choose option 1 from the menu and enter your details.
2. **View Players**: Select option 2 to see who else is in the arena.
3. **Battle**: Pick option 3, select two players by ID, and watch them duel based on their stats.
4. **Exit**: Use option 4 to gracefully leave the game.

## Testing

### Overview

The game includes automated unit tests to verify the functionality of core game mechanics and user interactions.

### Testing Framework

- **Mock Functions**: Mock versions of `inputPlayerDetails` and `inputIntegerFromUser` are used to simulate user input during tests.
- **TestGame Class**: Extends `Game` to override methods with mock functions for isolated testing of menu choices.
- **Assertions**: Each test case asserts expected behavior such as adding players, displaying player lists, initiating battles, and exiting the game.

### Running Tests

To run the tests:

1. Execute the test script using `npm test` or `node test.js`.

### Example Tests

- **Test Case 1**: Verifies the correct display of the game menu.
- **Test Case 2**: Tests adding the first player to the arena.
- **Test Case 3**: Ensures adding a second player updates the player list correctly.
- **Test Case 4**: Checks the functionality of viewing all players in the arena.
- **Test Case 5**: Tests initiating a battle with valid player IDs.
- **Test Case 6**: Validates the proper exit functionality of the game.

### Conclusion

These tests ensure that the Battle Arena Game functions as expected under various scenarios, providing confidence in its reliability and user experience.

## Dependencies

- `readline`: Handles user input smoothly through the command line.

## Author

Siddhesh Sonawane
