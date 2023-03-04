/*
 * TASK:
 * Use objects and arrays to re-write the cake tin program in a way that makes it more generic,
 * so that it's closer to being something that could work for any user without them having to
 * modify code. A `cakeTins` definition is provided to get you started.
 */

// const getCakeIngredients = (cakeTins) => "Ingredients list...";

// const cakeTins = [
//   { width: 20, height: 20, depth: 8 },
//   { width: 15, height: 22, depth: 10 },
//   { width: 25, height: 25, depth: 12 },
//   { width: 25, height: 25, depth: 10 },
// ];

// console.log(getCakeIngredients(cakeTins));

const getCakeIngredients = (cakeTins: CakeTin[]) => "Ingredients list...";

const cakeTinVolume = (cakeTinInfo: CakeTin) =>
  cakeTinInfo.width * cakeTinInfo.height * cakeTinInfo.depth;

const cakeTinVolumes = ([cakeTin, ...remainingCakeTins]: CakeTin[]) =>
  remainingCakeTins.length === 0
    ? cakeTinVolume(cakeTin)
    : cakeTinVolume(cakeTin) + cakeTinVolumes(remainingCakeTins);

const cakeTins = [
  { width: 20, height: 20, depth: 8 },
  { width: 15, height: 22, depth: 10 },
  { width: 25, height: 25, depth: 12 },
  { width: 25, height: 25, depth: 10 },
];

type CakeTin = typeof cakeTins[0];

console.log(cakeTinVolumes(cakeTins));
