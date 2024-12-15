function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // Output: false
console.log(foo(0, -0));  // Output: false

function bar(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}
console.log(bar(NaN, NaN)); // Output: true
console.log(bar(0, -0)); // Output: false
//Object.is() distinguishes between -0 and +0, while also considering NaN to be equal to itself.