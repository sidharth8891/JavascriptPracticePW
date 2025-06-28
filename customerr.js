class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateName(name) {
  if (name.length < 3) {
    throw new ValidationError("this is a custom error");
  }
}

validateName("S");
