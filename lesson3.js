/*
 * TASK:
 * Write a program that allows somebody to know how much of each cake ingredient they'll need given
 * the number of cake tins they have available.
 *
 * DETAILS:
 * 1. The ingredients for the cake are as follows:
 *    1. 60kg of flour required per m^3 of cake tin.
 *    2. 20kg of raisins required per m^3 of cake tin.
 *    3. 8kg of butter required per m^3 of cake tin.
 * 2. The user has four cake tins of various sizes:
 *    1. 20x20x8 cm.
 *    2. 15x22x10 cm.
 *    3. 25x25x12 cm.
 *    4. 25x25x10 cm.
 *
 * BONUS TASK:
 * 1. Use a function to keep the code DRY, and remove the need for all of the duplicated code.
 *
 * HOMEWORK:
 * 1. Create constants defining how much of each ingredient the user already has, such that:
 *    1. `flourAvailableInKg = 1.5`
 *    2. `raisinsAvailableInKg = 0.3`
 *    3. `butterAvailableInKg = 0.2`.
 * 2. Calculate whether the user will have enough of each ingredient (e.g.
 *    `sufficientFlour`, sufficientRaisins`, etc).
 * 3. Create inventory messages for each ingredient (e.g. `flourInventoryMessage`) which
 *    are empty strings (e.g. "") if the user has enough of that ingredient, but which warn
 *    the user if they don't (e.g. " (N.B: you need more flour!)").
 * 4. Update the ingredients message to include all of the inventory warnings so that we see
 *    something like this, for example:
 *    - "2. 0.405kg of butter (N.B: you need more butter!)."
 */

// const CUBED_METER_IN_CM3 = 100 * 100 * 100;

const kgOfFlourRequiredPerM3 = 60;
const kgOfRaisinsRequiredPerM3 = 20;
const kgOfButterRequiredPerM3 = 8;

// const cakeTinOneWidthInCm = 20;
// const cakeTinOneHeightInCm = 20;
// const cakeTinOneDepthInCm = 8;
// const cakeTinOneVolumeInCm3 =
//   cakeTinOneWidthInCm * cakeTinOneHeightInCm * cakeTinOneDepthInCm;

// const cakeTinTwoWidthInCm = 15;
// const cakeTinTwoHeightInCm = 22;
// const cakeTinTwoDepthInCm = 10;
// const cakeTinTwoVolumeInCm3 =
//   cakeTinTwoWidthInCm * cakeTinTwoHeightInCm * cakeTinTwoDepthInCm;

// const cakeTinThreeWidthInCm = 25;
// const cakeTinThreeHeightInCm = 25;
// const cakeTinThreeDepthInCm = 12;
// const cakeTinThreeVolumeInCm3 =
//   cakeTinThreeWidthInCm * cakeTinThreeHeightInCm * cakeTinThreeDepthInCm;

// const cakeTinFourWidthInCm = 25;
// const cakeTinFourHeightInCm = 25;
// const cakeTinFourDepthInCm = 10;
// const cakeTinFourVolumeInCm3 =
//   cakeTinFourWidthInCm * cakeTinFourHeightInCm * cakeTinFourDepthInCm;

const volume = (width, height, depth) => width * height * depth;

const cubedCentimetersToCubedMeters = (cm3) => cm3 / (100 * 100 * 100);

const cakeTinOneVolumeInCm3 = volume(20, 20, 8);
const cakeTinTwoVolumeInCm3 = volume(15, 22, 10);
const cakeTinThreeVolumeInCm3 = volume(25, 25, 12);
const cakeTinFourVolumeInCm3 = volume(25, 25, 10);

const totalVolumeInCm3 =
  cakeTinOneVolumeInCm3 +
  cakeTinTwoVolumeInCm3 +
  cakeTinThreeVolumeInCm3 +
  cakeTinFourVolumeInCm3;
const TotalVolumeInM3 = cubedCentimetersToCubedMeters(totalVolumeInCm3);

const amountOfFlourRequired = kgOfFlourRequiredPerM3 * TotalVolumeInM3;
const amountOfRaisinsRequired = kgOfRaisinsRequiredPerM3 * TotalVolumeInM3;
const amountOfButterRequired = kgOfButterRequiredPerM3 * TotalVolumeInM3;

const ingredientsList = `Ingredients List:

1. ${amountOfFlourRequired}kg of flour.
2. ${amountOfRaisinsRequired}kg of raisins.
3. ${amountOfButterRequired}kg of butter.
`;

console.log(ingredientsList);
