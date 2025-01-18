
function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

function handleEven () {
    console.log(`The number  is an even `)
}
function handleOdd () {
    console.log(`The number is an odd`)
}

handleNum (6, handleEven, handleOdd )
handleNum (45, handleEven, handleOdd )
