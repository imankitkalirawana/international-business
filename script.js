/** @format */

const diceFace = document.getElementById("dice-face");
const pawns = {
  red: { x: 89, y: 88 },
  blue: { x: 93, y: 88 },
  yellow: { x: 89, y: 93 },
  green: { x: 93, y: 93 },
};

const pawnElements = {
  red: document.getElementById("pawn-red"),
  blue: document.getElementById("pawn-blue"),
  yellow: document.getElementById("pawn-yellow"),
  green: document.getElementById("pawn-green"),
};

let pawnPositions = {
  red: 0,
  blue: 0,
  yellow: 0,
  green: 0,
};

let players = {
  1: {
    name: "Player 1",
    money: 25000,
    color: "red",
  },
  2: {
    name: "Player 2",
    money: 25000,
    color: "blue",
  },
  3: {
    name: "Player 3",
    money: 25000,
    color: "yellow",
  },
  4: {
    name: "Player 4",
    money: 25000,
    color: "green",
  },
};

let currTurn = 1;
let diceResult = 1;
console.log("Initial turn: ", currTurn);

function rollDice() {
  diceFace.innerHTML = "";
  diceEffect();
  const rollResult = Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < rollResult; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    diceFace.appendChild(dot);
  }
  diceResult = rollResult;
  // if (rollResult !== 6) {
  //   currTurn = (currTurn % 4) + 1;
  // }

  return rollResult;
}

function start() {
  checkTurn(currTurn);
}

function checkTurn(turn) {
  if (turn == 1) {
    movePawn("red");
  } else if (turn == 2) {
    movePawn("blue");
  } else if (turn == 3) {
    movePawn("yellow");
  } else if (turn == 4) {
    movePawn("green");
  }
}

function movePawn(color) {
  const rollResult = rollDice();
  pawnPositions[color] = (pawnPositions[color] + rollResult) % (35 + 1);

  const block = countries.find(
    (country) => country.id === pawnPositions[color]
  );
  const blockX = block.x;
  const blockY = block.y;
  if (
    block.id !== 7 &&
    block.id !== 9 &&
    block.id !== 11 &&
    block.id !== 15 &&
    block.id !== 18 &&
    block.id !== 20 &&
    block.id !== 23 &&
    block.id !== 27 &&
    block.id !== 32
  ) {
    if (Countries[block.id].purchased == 0) {
      setTimeout(function () {
        displayCountryDetails(block.id);
      }, 1000);
    } else {
      console.log("Already purchased, Pay Rent!!!");
      payRent();
    }
  } else {
    if (diceResult !== 6) {
      currTurn = (currTurn % 4) + 1;
    }
  }

  pawns[color] = { x: blockX, y: blockY };
  pawnElements[color].style.top = `${blockY}%`;
  pawnElements[color].style.left = `${blockX}%`;
}

function diceEffect() {
  const dice = document.getElementById("dice");
  dice.classList.add("dice-effect");
  setTimeout(function () {
    dice.classList.remove("dice-effect");
  }, 1000);
}
