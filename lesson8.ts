/**
 * TASK:
 * Create functions that would have allowed us to have better reports in previous lessons:
 *
 * 1. A `displayNumber` function that comma delimits numbers so they are easier to read.
 * 2. A `delimitList` function that delimits lists with a comma for all but the final two items in
 *    the list, which it delimits with an ampersand.
 *
 * BONUS:
 * 1. Show how `import` and `export` can be used to have those reports make use of the functions defined here.
 */

const delimitNumberString = (numberStr: string) => {
  const rightmostThreeDigits = numberStr.substring(numberStr.length - 3);
  const remainingDigits = numberStr.substring(0, numberStr.length - 3);

  return numberStr.length <= 3
    ? numberStr
    : `${delimitNumberString(remainingDigits)},${rightmostThreeDigits}`;
};

const displayNumber = (number: number) => delimitNumberString(String(number));

const delimitList = ([firstItem, ...remainingItems]: string[]) =>
  remainingItems.length === 0
    ? firstItem === undefined
      ? ""
      : String(firstItem)
    : remainingItems.length === 1
    ? firstItem + " & " + remainingItems[0]
    : firstItem + ", " + delimitList(remainingItems);

console.log(delimitList(["x", "y", "z"]));
