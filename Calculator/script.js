const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
    num.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentInput);
    });
});

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const inputNumber = (number) => {
    if(currentInput === '0'){
        currentInput = number
    }else{
        currentInput += number;
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (op) => {
    prevInput = currentInput;
    calculationOperator = op;
    currentInput = '0'
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentInput);
});

const calculate = () => {
    let result = 0;
    switch(calculationOperator){
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break;
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break;
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            console.log("yyy")
            break;
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break;
        default:
            return
    }
    currentInput = result.toString();
    calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');
const clearAll = () => {
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentInput);
});