# JavaScript Loose Comparison Bug

This repository demonstrates an unexpected behavior of JavaScript's loose comparison operator (==) when dealing with NaN (Not a Number) and -0 (negative zero).

## The Bug

JavaScript's loose comparison does not follow standard mathematical equality for NaN and -0:

* **NaN:**  `NaN` is never equal to itself, including `NaN == NaN` which evaluates to `false`.
* **-0 and 0:**  `-0` and `0` are considered equal by `==`. However, this can lead to unintended consequences, particularly if these values represent actual physical quantities where the sign matters.

The provided `bug.js` file illustrates this issue with simple functions and `console.log` outputs demonstrating the unexpected results.

## Solution

To mitigate these issues, always use strict equality (===) when comparing values in JavaScript. Strict equality checks for both value and type, resulting in more predictable comparisons, as shown in `bugSolution.js`.