// nullish coalescing operator

let name = null;
const name2 = name ?? "unknown";
console.log(name2);

// ----------------The ?? operator checks if the value on its left is either null or undefined. If it is, it returns the value on the right.---------

// || - Logical OR
let a = 0;
let b = 20;
console.log(a || b);

// ----------------The || operator checks if the value on the left is "falsy" (like null, undefined, 0, false, NaN, or ""). If it is, it returns the right-side value; otherwise, it returns the left-side value. This is useful for setting defaults if a variable might be undefined or another falsy value.---------

// && - Logical AND
let c = 0;
let d = 30;
console.log(c && d);

//--------------------If the first operand is "falsy," JavaScript stops evaluating and returns that "falsy" value. This behavior is called "short-circuiting."
// Conditional Rendering in User Interfaces