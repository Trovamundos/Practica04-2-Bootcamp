let numberA;
let numberB = 0;
let operator = 'sum'; 

var operation = (operationSign) => {

    numberA = parseInt(document.getElementById('result').value);

    switch(operator) {
        case 'sum':
            numberB = numberA + numberB;
            break;
        case 'subtraction':
            numberB = numberB - numberA;
            break;
        case 'multiplication':
            numberB = numberB * numberA;
            break;
        case 'division':
            numberB = numberB / numberA;
            break;
    }

    resultOperationFunction()
    operator = operationSign;
}

var resultOperationFunction = () => document.getElementById('result').value = numberB;

document.getElementById('sum').addEventListener('click', function() {operation('sum')});
document.getElementById('subtraction').addEventListener('click', function() {operation('subtraction')});
document.getElementById('multiplication').addEventListener('click', function() {operation('multiplication')});
document.getElementById('division').addEventListener('click', function() {operation('division')});

document.getElementById('resultButton').addEventListener('click', resultOperationFunction);