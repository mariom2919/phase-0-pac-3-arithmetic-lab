// Basic math functions
function add(a, b) {
    // Returns the sum of two numbers
    return a + b;
  }
  
  function subtract(a, b) {
    // Returns the difference between two numbers
    return a - b;
  }
  
  function multiply(a, b) {
    // Returns the product of two numbers
    return a * b;
  }
  
  function divide(a, b) {
    // Returns the result of dividing a by b
    // It's important to check for division by zero
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  // Increment and decrement functions
  function increment(n) {
    // Returns the value of n incremented by 1
    return n + 1;
  }
  
  function decrement(n) {
    // Returns the value of n decremented by 1
    return n - 1;
  }
  
  // Parsing functions
  function makeInt(string) {
    // Parses a string into a base-10 integer and returns it
    // Handles non-numeric characters by returning NaN
    const parsedInt = parseInt(string, 10);
    return isNaN(parsedInt) ? NaN : parsedInt;
  }
  
  function preserveDecimal(string) {
    // Parses a string into a float and returns it
    return parseFloat(string);
  }
  