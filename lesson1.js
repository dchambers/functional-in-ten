/*
 * TASK:
 * Write a program that allows a builder to determine whether they have enough money to carpet a
 * group of houses that they've constructed.
 *
 * DETAILS:
 * 1. Carpet costs £7.49/sqm.
 * 2. Each house has a carpeted area of 84 sqm.
 * 3. There are 20 houses to carpet.
 * 4. There's £21,500 in remaining funds.
 *
 * HOMEWORK:
 * 1. Figure out the greatest number of houses we could carpet with the available money.
 * 2. Figure out highest cost of carpet we could afford if we needed to carpet 30 houses.
 */
const carpetCostPerSquareMeterInGbp = 7.49;
const carpetedAreaPerHouseInSqm = 84;
const numberOfHousesToBeCarpeted = 20;
const remainingFunds = 21500;

const carpetRequiredForJobInSquareMeters =
  carpetedAreaPerHouseInSqm * numberOfHousesToBeCarpeted;
const carpetCost =
  carpetRequiredForJobInSquareMeters * carpetCostPerSquareMeterInGbp;
const fundsAfterCarpetingJob = remainingFunds - carpetCost;
const sufficientMoneyForJob = fundsAfterCarpetingJob >= 0;
const carpetingSuccessMessage = sufficientMoneyForJob
  ? "Enough money available to perform job. Ordering carpet now."
  : "Insufficient money available for job. Work halted.";

console.log(carpetingSuccessMessage);
