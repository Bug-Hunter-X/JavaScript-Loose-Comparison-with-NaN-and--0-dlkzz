function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // Output: false
console.log(foo(0, -0));  // Output: false