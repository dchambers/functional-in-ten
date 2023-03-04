/*
 * TASK:
 * Write a program that takes a list of numbers, and displays to the user a report detailing the
 * subset of numbers that are odd, that are even, and the value of those numbers if doubled or
 * halved.
 *
 * Assuming the list of numbers [1, 2, 3] it should generate a report as follows:
 *
 * Number report for numbers 1, 2, 3:
 *
 * Filtered Numbers:
 * 1, 3 (Odd Numbers)
 * 2 (Even Numbrers)
 *
 * Mapped Numbers:
 * 2, 4, 6 (Numbers Doubled)
 * 0.5, 1, 1.5 (Numbers Halved)
 *
 * BONUS:
 * Add a 'Mapped AND Filtered' sections that would look as follows:
 *
 * Mapped AND Filtered:
 * 2, 4, 6 (Even, Doubled Numbers)
 *  (Odd, Doubled Numbers)
 *
 * HOMEWORK:
 * 1. Add tripled and quadrupled numbers to the 'Mapped Numbers' section.
 * 2. Add tripled and quadrupled numbers to the 'Mapped AND Filtered Numbers' section.
 */

const arrayOfNumbers = [1, 2, 3];

const isOdd = (number) => number % 2 === 1;
const isEven = (number) => number % 2 === 0;

const double = (number) => number * 2;
const half = (number) => number / 2;

const numberReport = `Number report for numbers ${arrayOfNumbers.join(", ")}:

Filtered Numbers:
${arrayOfNumbers.filter(isOdd).join(", ")} (Odd Numbers)
${arrayOfNumbers.filter(isEven).join(", ")} (Even Numbrers)

Mapped Numbers:
${arrayOfNumbers.map(double).join(", ")} (Numbers Doubled)
${arrayOfNumbers.map(half).join(", ")} (Numbers Halved)

Mapped AND Filtered Numbers:
${arrayOfNumbers.map(double).filter(isEven).join(", ")} (Even, Doubled Numbers)
${arrayOfNumbers.map(double).filter(isOdd).join(", ")} (Odd, Doubled Numbers)
`;

console.log(numberReport);
