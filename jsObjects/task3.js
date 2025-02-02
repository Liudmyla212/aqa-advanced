const car1 = {
    brand: "Audi",
    model: "Q8",
    year: 2024
};

const car2 = {
    brand: "BMW",
    model: "M3",
    owner: "Juli"
};

const car3 = {...car1, ...car2}

console.log(car2); 
