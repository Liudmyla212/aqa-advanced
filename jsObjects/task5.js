const users = [
    { name: "John", email: "john@example.com", age: 28 },
    { name: "Alice", email: "alice@example.com", age: 25 },
    { name: "Bob", email: "bob@example.com", age: 30 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
