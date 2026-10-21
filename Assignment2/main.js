const numbers = [];

for (let i = 0; i < 5; i++) {
  const number = Number(prompt(`Enter number ${i + 1}:`));
  numbers.push(number);
}

console.log("Numbers:", numbers);

const numberToFind = Number(prompt("Enter a number to find:"));
const numberFound = numbers.includes(numberToFind);

console.log(
  numberFound
    ? `${numberToFind} was found in the numbers array.`
    : `${numberToFind} was not found in the numbers array.`
);

numbers.pop();
console.log("Numbers after removing the last number:", numbers);

numbers.sort((a, b) => a - b);
console.log("Numbers in ascending order:", numbers);