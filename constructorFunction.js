function Person(name, age) {
  this.name = name;  // 'this' refers to the new object created
  this.age = age;
}

// Creating objects using the constructor function
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);

console.log(person1.name); // Outputs: John
console.log(person2.age);  // Outputs: 25
