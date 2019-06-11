// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

var addTo = function(passed)

{var add = function(inner)
{return passed + inner; };

return add; };

var addFive = new addTo(5)
var addEight = new addTo(8)
var addTen = new addTo(10)

console.dir(addFive);
console.dir(addEight);
console.dir(addTen);

console.log(addFive(2));
console.log(addEight(4));
console.log(addTen(10));
  

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
