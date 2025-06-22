let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]
let removedFruit = fruits.pop(); 
console.log(fruits); 
let firstFruit = fruits.shift(); 
console.log(fruits); 
fruits.unshift("apple"); 
console.log(fruits); 
fruits.splice(5, 5, "kiwi");  
console.log(fruits); 