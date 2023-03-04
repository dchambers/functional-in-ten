// Write a function that takes an inventoryItem, and which decreases the inventory count by one
// Write a function that takes a list of coords, and reverses the coordinate axes

// I'm not sure about this one yet, but the previous lesson was too much as I was needing to introduce types, destructuring and recursion, all in the same lesson!!!
// Can we think of a better task that allows me to demonstrate types, destructuring and spreads, where `insertNumberAtPositionThree` can just be something silly I come up with when playing in the REPL?

const myNumber: number[] = [25];

const x: boolean[] = [10 > 20, false, !false];

// type Address = {
//   street: string;
//   town: string;
//   postcode: string;
//   country: string;
// };

const myAddress = {
  street: "1 Downtown",
  town: "",
  postcode: "",
  country: "",
};

type Address = typeof myAddress;

type Coord = [number, number];

const coordinates: Coord[] = [
  [0, 1],
  [10, 21],
];

type Letter = [string, boolean];

const letters: Letter[] = [
  ["x", true],
  ["y", !true],
];

/*
 * TASK:
 * Write a function (`insertNumberAtPositionThree`) that takes an array of numbers, plus a mystery number, and which returns a new array where the mystery number is added as the third element of the new array.
 */
const insertNumberAtPositionThree = (
  [firstNumber, secondNumber, ...remainingNumbers]: number[],
  mysteryNumber: number
) => [firstNumber, secondNumber, mysteryNumber, ...remainingNumbers];
