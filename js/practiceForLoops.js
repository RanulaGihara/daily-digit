//Write a for loop that prints all even numbers between 1 and 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Question:Write a for...in loop that prints the keys and values of the following object:

const person = { name: "Alice", age: 25, city: "Wonderland" };

for (let key in person){
    console.log(key+':'+ person[key]);
}

