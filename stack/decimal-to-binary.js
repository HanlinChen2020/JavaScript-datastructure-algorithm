import Stack from './stack.js';

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';

    while (number >= 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(num / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}