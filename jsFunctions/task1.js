// function declaration

let width = 5;
let height = 10;

function area(width,height) {
    let ourArea = width * height
    return ourArea
}
console.log (`Площa прямокутника declaration ${area(width,height)}`)

// function expression
const area1 = function(width,height){
    let ourArea1 = width * height
    return ourArea1
}
console.log (`Площa прямокутника expression ${area1(width,height)}`)


// arrow function
const area2 = (width,height) => {
    let ourArea2 = width * height
    return ourArea2
}
console.log (`Площa прямокутника arrow function ${area1(width,height)}`)