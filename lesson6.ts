/*
 * TASK:
 * Write a program that takes a list of numbers (e.g. `[3, 4, 5]`), and displays to the user a
 * number report, with the following form:
 *
 * Number Report for numbers 3, 4, 5:
 *
 * 3 + 4 + 5 = 12 (Sum)
 * 3 × 4 × 5 = 60 (Product)
 *
 * BONUS:
 * Turn the program into a function that can be called with different lists of numbers.
 *
 * HOMEWORK:
 * 1. Create an `average` function that takes a list of numbers, and returns the mean average of those numbers.
 *    - e.g. `average([3, 4, 5])` would be `4`, since the sum of three, four and five is twelve, and dividing
 *      twelve by the number of items in the list (three) gives you four.
 *    - Hint: you can use the `sum` function that you create previously to help you.
 * 2. Add the average of the numbers to the number report so that it looks like this:
 *    - `(3 + 4 + 5) ÷ 3 = 4 (Average)`
 */

const sum = ([number, ...remainingNumbers]: number[]): number =>
  remainingNumbers.length === 0 ? number : number + sum(remainingNumbers);

const product = ([number, ...remainingNumbers]: number[]): number =>
  remainingNumbers.length === 0 ? number : number * product(remainingNumbers);

const average = (numbers: number[]) => sum(numbers) / numbers.length;

const generateNumberReport = (numbers: number[]) => `
Number report for numbers ${numbers.join(", ")}:

${numbers.join(" + ")} = ${sum(numbers)} (Sum)
${numbers.join(" × ")} = ${product(numbers)} (Product)
(${numbers.join(" + ")}) ÷ ${numbers.length} = ${average(numbers)} (Average)
`;

console.log(average([2, 3, 5]));

console.log(generateNumberReport([3, 4, 5]));
