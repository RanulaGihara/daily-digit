//Q7: Write a function sumAll that takes any number of arguments and returns their sum using the ES6 rest parameter.

const sumAllh = sumAll(1,2,2,3,23);
console.log(sumAllh);

// my

function sumAll(...args) {
    let total = 0;
    args.forEach((arg) => total += arg);
    return total;
}

//real

function sumAll(...numbers) {
    let sum = 0;  // Initialize sum to 0
    numbers.forEach(number => {
      sum += number;  // Add each number to the sum
    });
    return sum;  // Return the total sum
  }
  
  // Example usage:
  console.log(sumAll(1, 2, 3));  // Output: 6
  console.log(sumAll(10, 20, 30, 40));  // Output: 100
  console.log(sumAll());  // Output: 0
  