function sortArray(numbers, order) {
  const sortedNumbers = [...numbers];

  if (order === "asc") {
    return sortedNumbers.sort((a, b) => a - b);
  }

  if (order === "desc") {
    return sortedNumbers.sort((a, b) => b - a);
  }

  return sortedNumbers;
}

const sortableNumbers1 = [9, 4, 12, 0, 7];
const sortableNumbers2 = [2, 14, 5, 1, 11];

console.log("Original array:", sortableNumbers1);
console.log("Sorted array:", sortArray(sortableNumbers1, "asc"));

console.log("Original array:", sortableNumbers2);
console.log("Sorted array:", sortArray(sortableNumbers2, "desc"));