function sort (firstNum, secondNum, thirdNum) {

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    thirdNum = Number(thirdNum);

    if (firstNum > secondNum && firstNum > thirdNum){
        console.log(firstNum);
        if ( secondNum > thirdNum ){
            console.log(secondNum);
            console.log(thirdNum);
        } else {
            console.log(thirdNum);
            console.log(secondNum);
        } 
    } else if ( secondNum > firstNum && secondNum > thirdNum){
        console.log(secondNum);
        if ( firstNum > thirdNum ){
            console.log(firstNum);
            console.log(thirdNum);
        } else {
            console.log(thirdNum);
            console.log(firstNum);
        }
    } else if ( thirdNum > firstNum && thirdNum > secondNum) {
        console.log(thirdNum);
        if ( firstNum > secondNum) {
            console.log(firstNum);
            console.log(secondNum);
        } else {
            console.log(secondNum);
            console.log(firstNum);
        }
    }
}

sort (-3, 2, 11);