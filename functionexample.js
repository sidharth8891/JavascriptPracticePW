function testScope() {
  if (true) {
    var oldVar = "I am a var"; // function-scoped
    let newLet = "I am a let"; // block-scoped
    const constant = "I am a const"; // block-scoped
  }

  console.log(oldVar);  // Output: I am a var
  console.log(newLet);  // Error: newLet is not defined
  console.log(constant); // Error: constant is not defined
}

testScope();
