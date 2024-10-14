const person = { name: "Alice" };
const anotherPerson = person;
anotherPerson.name = "Bob";

//Q2: Write a function mergeObjects that takes two objects and merges them into one. If both object

const nds = handleObjs()
console.log(nds);

function handleObjs ()  {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    for (const key in obj2) {
        for (const key in obj1) {
            if (obj1[key] === obj2[key]) {
                obj1[key] = obj2[key];
            }
        }
    }
    return obj1
};

//In JavaScript, functions declared with const or let are not hoisted the same way as function declarations (using the function keyword).

//Q3: Given the array: const fruits = ['apple', 'banana', 'orange']; Write a function to remove the second item from the array without mutating the original array.

const fruits = ['apple', 'banana', 'orange'];
removeSecondItem(fruits);

function removeSecondItem(fruits) {
    return [...fruits.slice(0,1), ...fruits.slice(2)];
}