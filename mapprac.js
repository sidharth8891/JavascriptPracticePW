let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);  
console.log(doubled);  // [2, 4, 6]

let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);

