const findMax = (numbers) => {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};
const tenNumbers = [1, 22, 3, 44, 5, 66, 7, 88, 9, 100];
const maxValue = findMax(tenNumbers);
console.log(maxValue);
