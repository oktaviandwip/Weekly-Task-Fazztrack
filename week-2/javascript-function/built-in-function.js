//1. Array.prototype.map(): Creates a new array by applying a function to each element in an existing array.
const mapNumbers = [1, 2, 3, 4];
const squaredNumbers = mapNumbers.map(num => num * num);
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16]

//2. Array.prototype.filter(): Creates a new array with elements that pass a certain condition.
const filterNumbers = [1, 2, 3, 4, 5];
const evenNumbers = filterNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4]

//3. Array.prototype.forEach(): Executes a provided function once for each array element.
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));
// Outputs:
// apple
// banana
// orange

//4. String.prototype.includes(): Checks if a string contains another string and returns true or false.
const helloSentence = 'Hello, World!';
const containsHello = helloSentence.includes('Hello');
console.log(containsHello); // Outputs: true

//5. String.prototype.split(): Splits a string into an array of substrings based on a specified delimiter.
const sentence = 'This is a sentence';
const words = sentence.split(' ');
console.log(words); // Outputs: ["This", "is", "a", "sentence"]

//6. Array.prototype.push(): Adds one or more elements to the end of an array.
const pushFruits = ['apple', 'banana'];
pushFruits.push('orange', 'grape');
console.log(pushFruits); // Outputs: ["apple", "banana", "orange", "grape"]

//7. Array.prototype.pop(): Removes the last element from an array and returns that element.
const popFruits = ['apple', 'banana', 'orange'];
const removedFruit = popFruits.pop();
console.log(removedFruit); // Outputs: "orange"
console.log(popFruits); // Outputs: ["apple", "banana"]

//8. Array.prototype.shift(): Removes the first element from an array and returns that element.
const shiftFruits = ['apple', 'banana', 'orange'];
const firstFruit = shiftFruits.shift();
console.log(firstFruit); // Outputs: "apple"
console.log(shiftFruits); // Outputs: ["banana", "orange"]

//9. Array.prototype.unshift(): Adds one or more elements to the beginning of an array.
const unshiftFruits = ['banana', 'orange'];
unshiftFruits.unshift('apple', 'grape');
console.log(unshiftFruits); // Outputs: ["apple", "grape", "banana", "orange"]

//10. Array.prototype.slice(): Returns a copy of a portion of an array into a new array.
const allNumbers = [1, 2, 3, 4, 5];
const slicedNumbers = allNumbers.slice(1, 4);
console.log(slicedNumbers); // Outputs: [2, 3, 4]
console.log(allNumbers); // Outputs: [1, 2, 3, 4, 5] (original array remains unchanged)





