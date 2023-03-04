/**
 * TASK:
 * Using the data given in `visitedTownsJourneyLog`, use the data to dynamically produce a journey report that looks like this:
 *
 * # Visited Towns Journey Report
 *
 * ## Largest Three Towns
 *   - London (Greater London)
 *   - Birmingham (West Midlands)
 *   - Bristol (Bristol)
 *
 * ## Smallest Three Towns
 *   - Exeter (Devon)
 *   - Oxford (Oxfordshire)
 *   - Plymouth (Devon)
 *
 * BONUS:
 * 1. Show how we can use `readonly` on function types to protect against accidental mutation.
 * 2. Add a population section to the report that looks like this:
 *
 * ## Population
 * Combined population of visited towns: 9343000
 *
 * HOMEWORK:
 *
 * 1. Add a couple more towns to the visited report and confirm that the report still generates correcdtly.
 * 2. Make the population section more comprehensive by having three bullet points:
 *    - Combined population (as we currently have)
 *    - Combined population of the largest three towns.
 *    - Combined population of the smallest three towns.
 */

const THOUSAND = 1000;
const MILLION = THOUSAND * THOUSAND;

const visitedTownsJourneyLog = [
  {
    name: "Birmingham",
    county: "West Midlands",
    population: 992 * THOUSAND,
  },
  {
    name: "Bristol",
    county: "Bristol",
    population: 380 * THOUSAND,
  },
  {
    name: "Exeter",
    county: "Devon",
    population: 111 * THOUSAND,
  },
  {
    name: "London",
    county: "Greater London",
    population: 7.2 * MILLION,
  },
  {
    name: "Nottingham",
    county: "Nottinghamshire",
    population: 285 * THOUSAND,
  },
  {
    name: "Oxford",
    county: "Oxfordshire",
    population: 135 * THOUSAND,
  },
  {
    name: "Plymouth",
    county: "Devon",
    population: 240 * THOUSAND,
  },
];

type Town = typeof visitedTownsJourneyLog[0];

const largestTown = (town1: Town, town2: Town) =>
  town1.population > town2.population ? -1 : 1;

const smallestTown = (town1: Town, town2: Town) =>
  town1.population < town2.population ? -1 : 1;

const printTownName = (town: Town) => `  - ${town.name} (${town.county})`;

const displayLargestThreeTowns = (visitedTowns: Town[]) =>
  visitedTowns.sort(largestTown).slice(0, 3).map(printTownName).join("\n");

const displaySmallestThreeTowns = (visitedTowns: Town[]) =>
  visitedTowns.sort(smallestTown).slice(0, 3).map(printTownName).join("\n");

const totalPopulation = ([nextTown, ...remainingTowns]: Town[]) =>
  remainingTowns.length === 0
    ? nextTown.population
    : nextTown.population + totalPopulation(remainingTowns);

const generateJourneyReport = (visitedTowns: Town[]) => `
# Visited Towns Journey Report

## Largest Three Towns
${displayLargestThreeTowns(visitedTowns)}

## Smallest Three Towns
${displaySmallestThreeTowns(visitedTowns)}

## Population
Combined population of visited towns: ${totalPopulation(visitedTowns)}
`;

console.log(generateJourneyReport(visitedTownsJourneyLog));
