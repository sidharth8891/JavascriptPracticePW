// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);  
// console.log(evenNumbers);  // [2, 4]


// let results = [{testcase: 'smoke', status: 'pass'}, {testcase: 'sanity', status: 'fail'}];
// let failedTests = results.filter(r => r.testcase === 'smoke');
// console.log(failedTests);

function* generatorFunction() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

// Using the generator function
const iterator = generatorFunction();

console.log(iterator.next().value); // Outputs: Hello
console.log(iterator.next().value); // Outputs: World
console.log(iterator.next().value); // Outputs: !