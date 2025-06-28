// let user;
// console.log(username); // Runtime Error: Cannot read property 'name' of undefined
// null.toString()

try {
  let user;
  console.log(username);
} catch (error) {
  console.error("Error caught:", error.message);
  throw new Error("Custom error");
}

