let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);  
console.log(evenNumbers);  // [2, 4]


let results = [{testcase: 'smoke', status: 'pass'}, {testcase: 'sanity', status: 'fail'}];
let failedTests = results.filter(r => r.testcase === 'smoke');
console.log(failedTests);

