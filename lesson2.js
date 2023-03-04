/*
 * TASK:
 * Write a program that allows a driver to know whether they have enough petrol to make a journey
 * with the fuel they have in their car.
 *
 * DETAILS:
 * 1. The journey is 120 miles long.
 * 2. The car uses 35mpg for urban driving, and 45mpg for highway driving.
 * 3. They have 3 gallons of petrol remaining in their tank.
 * 4. One third of the distance is urban driving, and the other two thirds are highway driving.
 *
 * BONUS TASK:
 * 1. Provide details regarding the amount of petrol that will be remaining in the success message.
 *
 * HOMEWORK:
 * 1. Calculate the additional miles that could be driven on the highway by defining an `additionalMilesPossible`
 *    constant, as: `const additionalMilesPossible = petrolRemaining * highwayDrivingMpg`.
 * 2. Use `additionalMilesPossible` to update the success message to show how many more miles they
 *    could go at the end of their journey, for example:
 *    - "you should have X gallons at the end of your journey, which is enough for another Y miles of driving"
 */
const journeyDistanceInMiles = 120;
const urbanJourneyMpg = 35;
const highwayDrivingMpg = 45;
const petrolAvailableInGallons = 3;

const urbanJourneyDistance = journeyDistanceInMiles / 3;
const highwayJourneyDistance = journeyDistanceInMiles - urbanJourneyDistance;
const petrolRequiredForUrbanJourney = urbanJourneyDistance / urbanJourneyMpg;
const petrolRequiredForHighwayJourney =
  highwayJourneyDistance / highwayDrivingMpg;
const totalPetrolRequired =
  petrolRequiredForUrbanJourney + petrolRequiredForHighwayJourney;
const petrolRemaining = petrolAvailableInGallons - totalPetrolRequired;
const sufficientPetrolAvailable = petrolRemaining > 0;
const additionalMilesPossible = petrolRemaining * highwayDrivingMpg;
const journeySuccessMessage = sufficientPetrolAvailable
  ? `You have enough petrol available for your journey (you should have ${petrolRemaining} gallons at the end of your journey, which is enough for another ${additionalMilesPossible} miles of driving).`
  : "Sorry, you don't have enough petrol to make the journey.";

console.log(journeySuccessMessage);
