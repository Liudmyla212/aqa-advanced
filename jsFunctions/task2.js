function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let result1 = isAdult(25);
let result2 = isAdult(15);

console.log(`Is 25 years old an adult? ${result1}`);
console.log(`Is 15 years old an adult? ${result2}`);