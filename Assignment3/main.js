const numbers = [];
let input;

do {
  input = prompt("Enter an integer (Cancel, leave blank, or enter a non-integer to stop):");

  if (input === null || input.trim() === "") {
    break;
  }

  const number = Number(input);

  if (!Number.isInteger(number)) {
    break;
  }

  numbers.push(number);
} while (true);

const output = document.createElement("div");
const heading = document.createElement("h2");
heading.textContent = "Even numbers";
output.appendChild(heading);

for (const number of numbers) {
  if (number % 2 === 0) {
    const evenNumber = document.createElement("p");
    evenNumber.textContent = number;
    output.appendChild(evenNumber);
  }
}

const endMessage = document.createElement("p");
endMessage.textContent = "End of program.";
output.appendChild(endMessage);
document.body.appendChild(output);