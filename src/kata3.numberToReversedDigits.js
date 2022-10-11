const numberToReversedDigits = (number) =>
  number.toString(10).split("").map(Number).reverse();

module.exports = numberToReversedDigits;
