const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

console.log("Fruits:", fruits);
console.log("Fruits length:", fruits.length);
console.log("Element at index 2:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const vegetable = prompt(`Enter vegetable ${i + 1}:`);
  vegetables.push(vegetable);
}

console.log("Vegetables:", vegetables);
console.log("Vegetables length:", vegetables.length);