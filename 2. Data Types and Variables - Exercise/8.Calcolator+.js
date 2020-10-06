function calc (firstNum, operand, secondNum){
    let calc = 0;

    switch (operand) {
        case "+":
            calc = firstNum+secondNum
        break;
    }

    switch (operand) {
        case "-":
            calc = firstNum-secondNum;
        break;
    }

    switch (operand) {
        case "*":
            calc = firstNum*secondNum;
        break;
    }

    switch (operand) {
        case "/":
            calc = firstNum / secondNum;
        break;
    }

    console.log(calc.toFixed(2));
}

calc(5, '+', 10);