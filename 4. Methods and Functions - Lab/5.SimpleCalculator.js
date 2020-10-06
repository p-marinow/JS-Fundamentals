function calculator (firstOperand, secondOperand, operator) {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    let total = 0;

    switch(operator){
        case "add":
            total = firstOperand + secondOperand; break;
        case "subtract":
            total = firstOperand - secondOperand; break;
        case "multiply":
            total = firstOperand * secondOperand; break;
        case "divide":
            total = firstOperand / secondOperand; break;
    }

    console.log(total);
}

calculator(5, 5, 'multiply')