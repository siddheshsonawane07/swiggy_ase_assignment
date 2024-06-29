import Game from "./src/game.js";

const main = async () => {
  const game = new Game();
  await game.run();
};

main();
