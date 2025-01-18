function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргументи повинні бути числами.');
    }
    if (denominator === 0) {
        throw new Error('Ділення на нуль неможливе.');
    }
    return numerator / denominator;
}

const testCases = [
    { numerator: 10, denominator: 2 },
    { numerator: 15, denominator: 0 },
    { numerator: '15', denominator: 5 },
    { numerator: 20, denominator: 4 },
    { numerator: 9, denominator: 3 }
];

for (const testCase of testCases) {
    try {
        const result = divide(testCase.numerator, testCase.denominator);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    } finally {
        console.log('Робота завершена');
    }
}
