function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

const numbers = [9, 4, 12, 0, 7];
const sortedNumbers = sortArray(numbers);

console.log("Original array:", numbers);
console.log("Sorted array:", sortedNumbers);