/** @format */

let rollResult1 = 1;
let rollResult2 = 1;

let countries = [
  {
    id: 0,
    name: "Start",
    price: -1500,
    x: 89,
    y: 93,
  },
  {
    id: 1,
    name: "Singapore",
    price: 1000,
    x: 80,
    y: 93,
  },
  {
    id: 2,
    name: "Malaysia",
    price: 1000,
    x: 71,
    y: 93,
  },
  {
    id: 3,
    name: "Railways",
    price: 1000,
    x: 62,
    y: 93,
  },
  {
    id: 4,
    name: "China",
    price: 1000,
    x: 53,
    y: 93,
  },
  {
    id: 5,
    name: "Petroleum",
    price: 1000,
    x: 44,
    y: 93,
  },
  {
    id: 6,
    name: "Saudi Arabia",
    price: 1000,
    x: 35,
    y: 93,
  },
  {
    id: 7,
    name: "Chance",
    price: 1000,
    x: 26,
    y: 93,
  },
  {
    id: 8,
    name: "India",
    price: 1000,
    x: 17,
    y: 93,
  },
  {
    id: 9,
    name: "Jail",
    price: 1000,
    x: 5,
    y: 93,
  },
  {
    id: 10,
    name: "Australia",
    price: 1000,
    x: 5,
    y: 78,
  },
  {
    id: 11,
    name: "UNO",
    price: 1000,
    x: 5,
    y: 70,
  },
  {
    id: 12,
    name: "Hongkong",
    price: 1000,
    x: 5,
    y: 61,
  },
  {
    id: 13,
    name: "Mexico",
    price: 1000,
    x: 5,
    y: 53,
  },
  {
    id: 14,
    name: "Roadways",
    price: 1000,
    x: 5,
    y: 44,
  },
  {
    id: 15,
    name: "Travelling",
    price: 1000,
    x: 5,
    y: 35,
  },
  {
    id: 16,
    name: "USA",
    price: 1000,
    x: 5,
    y: 27,
  },
  {
    id: 17,
    name: "Japan",
    price: 1000,
    x: 5,
    y: 18,
  },
  {
    id: 18,
    name: "Party House",
    price: 1000,
    x: 5,
    y: 3,
  },
  {
    id: 19,
    name: "Italy",
    price: 1000,
    x: 17,
    y: 3,
  },
  {
    id: 20,
    name: "Chance",
    price: 1000,
    x: 26,
    y: 3,
  },
  {
    id: 21,
    name: "Brazil",
    price: 1000,
    x: 35,
    y: 3,
  },
  {
    id: 22,
    name: "Switzerland",
    price: 1000,
    x: 44,
    y: 3,
  },
  {
    id: 23,
    name: "Boston City",
    price: 1000,
    x: 53,
    y: 3,
  },
  {
    id: 24,
    name: "Airways",
    price: 1000,
    x: 62,
    y: 3,
  },
  {
    id: 25,
    name: "Germany",
    price: 1000,
    x: 71,
    y: 3,
  },
  {
    id: 26,
    name: "Canada",
    price: 1000,
    x: 80,
    y: 3,
  },
  {
    id: 27,
    name: "Resort",
    price: 1000,
    x: 93,
    y: 3,
  },
  {
    id: 28,
    name: "Egypt",
    price: 1000,
    x: 93,
    y: 18,
  },
  {
    id: 29,
    name: "Satellite",
    price: 1000,
    x: 93,
    y: 27,
  },
  {
    id: 30,
    name: "Iran",
    price: 1000,
    x: 93,
    y: 35,
  },
  {
    id: 31,
    name: "France",
    price: 1000,
    x: 93,
    y: 44,
  },
  {
    id: 32,
    name: "UNO",
    price: 1000,
    x: 93,
    y: 53,
  },
  {
    id: 33,
    name: "Waterways",
    price: 1000,
    x: 93,
    y: 61,
  },
  {
    id: 34,
    name: "Iraq",
    price: 1000,
    x: 93,
    y: 70,
  },
  {
    id: 35,
    name: "England",
    price: 1000,
    x: 93,
    y: 78,
  },
];

// let pawns = [
//   {
//     id: 1,
//     name: "Red",
//     x: 89,
//     y: 88,
//   },
//   {
//     id: 2,
//     name: "Blue",
//     x: 93,
//     y: 88,
//   },
//   {
//     id: 3,
//     name: "Yellow",
//     x: 89,
//     y: 93,
//   },
//   {
//     id: 4,
//     name: "Green",
//     x: 93,
//     y: 93,
//   },
// ];

let yellowPawn = { x: 89, y: 93 };

let yellowPawnHtml = document.getElementById("pawn-yellow");

function rollDice() {
  const diceFace = document.getElementById("dice-face");

  diceFace.innerHTML = "";
  diceEffect();
  let count = 0;
  let rollResult = Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < rollResult; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    diceFace.appendChild(dot);
    count++;
  }
  // movePawn(rollResult);
  return rollResult;
}
let redSum,
  blueSum,
  yellowSum,
  greenSum = 0;
let redBlock, blueBlock, yellowBlock, greenBlock;
let redPawnPos,
  bluePawnPos,
  yellowPawnPos,
  greenPawnPos = 0;

function movePawn() {
  let rollResult = rollDice();
  let x = yellowPawn.x;
  let y = yellowPawn.y;
  yellowSum += rollResult;
  yellowPawnPos = yellowSum;
  if (yellowSum <= 35) {
    yellowBlock = countries.find((country) => country.id === yellowSum);
  } else {
    yellowSum = yellowPawnPos - 36;
    yellowBlock = countries.find((country) => country.id === yellowSum);
  }

  let yellowBlockX = yellowBlock.x;
  let yellowBlockY = yellowBlock.y;

  yellowPawn = { x: yellowBlockX, y: yellowBlockY };
  yellowPawnHtml.style.top = `${yellowBlockY}%`;
  yellowPawnHtml.style.left = `${yellowBlockX}%`;
  rollResult += rollResult;
}

function diceEffect() {
  const dice = document.getElementById("dice");
  dice.classList.add("dice-effect");
  setTimeout(function () {
    dice.classList.remove("dice-effect");
  }, 1000);
}
