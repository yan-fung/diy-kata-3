const humanCatDogYears = (number) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= number; i++) {
    if (i === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else if (i >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
