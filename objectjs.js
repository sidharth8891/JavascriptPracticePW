let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28,
  isStudent: false
};
person.phone = '5454545454';
person.firstName = 'test';
console.log(person.firstName);
console.log(person.phone);
console.log(person["lastName"]);
console.log(person);
