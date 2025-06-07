// Function expression called divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function called square
const square = (x) => x * x;

// Define foo only once
const foo = function() {
  return 'bar';
};

const sum = 1 + 1;
const difference = 10 - 1;

// Arrow function for addition
const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2, 3); // => 5

// TwoAdder using arrow functions
const twoAdder = x => x + 2;
// OR
// const twoAdder = (x) => x + 2;

const sumVerbose = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};

sumVerbose(1, 2); // => 3

// Using map to square numbers
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2); 
console.log(squares); // => [1, 4, 9]
console.log(nums); // => [1, 2, 3]

// Marking items complete (assuming overdueTodoItems is defined)
const finishedItems = overdueTodoItems.map(item => {
  item.className = "complete";
  return item;
});
header.innerText = `You finished ${finishedItems.length} items!`;

// Mapping through user accounts (assuming lapsedUserAccounts is defined)
lapsedUserAccounts.map(u => sendBillTo(u.address));
