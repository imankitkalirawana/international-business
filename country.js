/** @format */

let countries = [
  {
    id: 0,
    name: "Start",
    price: -1500,
    x: 89,
    y: 93,
    color: "other",
    position: "corner",
  },
  {
    id: 1,
    name: "Singapore",
    price: 3000,
    x: 80,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "blue",
    position: "bottom",
  },
  {
    id: 2,
    name: "Malaysia",
    price: 1500,
    x: 71,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "green",
    position: "bottom",
  },
  {
    id: 3,
    name: "Railways",
    price: 9500,
    x: 62,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "silver",
    position: "bottom",
  },
  {
    id: 4,
    name: "China",
    price: 4500,
    x: 53,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "blue",
    position: "bottom",
  },
  {
    id: 5,
    name: "Petroleum",
    price: 5500,
    x: 44,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "silver",
    position: "bottom",
  },
  {
    id: 6,
    name: "Saudi Arabia",
    price: 5500,
    x: 35,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "green",
    position: "bottom",
  },
  {
    id: 7,
    name: "Chance",
    price: 0,
    x: 26,
    y: 93,
    color: "other",
    position: "bottom",
  },
  {
    id: 8,
    name: "India",
    price: 5500,
    x: 17,
    y: 93,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "blue",
    position: "bottom",
  },
  {
    id: 9,
    name: "Jail",
    price: 500,
    x: 5,
    y: 93,
    color: "other",
    position: "corner",
  },
  {
    id: 10,
    name: "Australia",
    price: 3300,
    x: 5,
    y: 78,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "yellow",
    position: "left",
  },
  {
    id: 11,
    name: "UNO",
    price: 0,
    x: 5,
    y: 70,
    color: "other",
    position: "left",
  },
  {
    id: 12,
    name: "Hongkong",
    price: 2000,
    x: 5,
    y: 61,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "blue",
    position: "left",
  },
  {
    id: 13,
    name: "Mexico",
    price: 4000,
    x: 5,
    y: 53,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "yellow",
    position: "left",
  },
  {
    id: 14,
    name: "Roadways",
    price: 3500,
    x: 5,
    y: 44,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "silver",
    position: "left",
  },
  {
    id: 15,
    name: "Travelling",
    price: 0,
    x: 5,
    y: 35,
    color: "other",
    position: "left",
  },
  {
    id: 16,
    name: "USA",
    price: 8500,
    x: 5,
    y: 27,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "yellow",
    position: "left",
  },
  {
    id: 17,
    name: "Japan",
    price: 2500,
    x: 5,
    y: 18,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "blue",
    position: "left",
  },
  {
    id: 18,
    name: "Party House",
    price: -500,
    x: 5,
    y: 3,
    color: "other",
    position: "corner",
  },
  {
    id: 19,
    name: "Italy",
    price: 3500,
    x: 17,
    y: 3,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "red",
    position: "top",
  },
  {
    id: 20,
    name: "Chance",
    price: 0,
    x: 26,
    y: 3,
    color: "other",
    position: "top",
  },
  {
    id: 21,
    name: "Brazil",
    price: 2500,
    x: 35,
    y: 3,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "yellow",
    position: "top",
  },
  {
    id: 22,
    name: "Switzerland",
    price: 3500,
    x: 44,
    y: 3,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "red",
    position: "top",
  },
  {
    id: 23,
    name: "Boston City",
    price: 0,
    x: 53,
    y: 3,
    color: "other",
    position: "top",
  },
  {
    id: 24,
    name: "Airways",
    price: 10500,
    x: 62,
    y: 3,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "silver",
    position: "top",
  },
  {
    id: 25,
    name: "Germany",
    price: 3500,
    x: 71,
    y: 3,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "germany",
    position: "top",
  },
  {
    id: 26,
    name: "Canada",
    price: 4000,
    x: 80,
    y: 3,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "yellow",
    position: "top",
  },
  {
    id: 27,
    name: "Resort",
    price: -500,
    x: 93,
    y: 3,
    color: "other",
    position: "corner",
  },
  {
    id: 28,
    name: "Egypt",
    price: 3200,
    x: 93,
    y: 18,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "green",
    position: "right",
  },
  {
    id: 29,
    name: "Satellite",
    price: 2000,
    x: 93,
    y: 27,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "silver",
    position: "right",
  },
  {
    id: 30,
    name: "Iran",
    price: 2500,
    x: 93,
    y: 35,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "green",
    position: "right",
  },
  {
    id: 31,
    name: "France",
    price: 2500,
    x: 93,
    y: 44,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "red",
    position: "right",
  },
  {
    id: 32,
    name: "UNO",
    price: 0,
    x: 93,
    y: 53,
    color: "other",
    position: "right",
  },
  {
    id: 33,
    name: "Waterways",
    price: 9500,
    x: 93,
    y: 61,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "silver",
    position: "right",
  },
  {
    id: 34,
    name: "Iraq",
    price: 5000,
    x: 93,
    y: 70,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "green",
    position: "right",
  },
  {
    id: 35,
    name: "England",
    price: 2500,
    x: 93,
    y: 78,
    bought: 0,
    rent: 0,
    house1: 0,
    rentHouse1: 100,
    house2: 0,
    rentHouse2: 200,
    house3: 0,
    rentHouse3: 300,
    hotel: 0,
    rentHotel: 400,
    mortage: 0,
    redeem: 1,
    color: "red",
    position: "right",
  },
];