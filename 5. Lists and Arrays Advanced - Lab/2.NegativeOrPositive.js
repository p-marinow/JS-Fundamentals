function negativeOrPositive (input) {
    let lastElement = 0;
    let currentElement = 0;
    let currentElementPos = 0;
    let lastElementPos = 0;
    let printArrPositive = [];
    let printArrNegative = [];
    let printArrZero = [];

    for ( let i = 0 ; i < input.length; i++ ) {
        currentElement = input[i];
        if (currentElement < 0 && currentElement > lastElement){
            printArrNegative.push(currentElement);
            lastElement = currentElement;
        } else if (currentElement < 0 && currentElement < lastElement) {
            printArrNegative.unshift(currentElement);
            lastElement = currentElement;
        }
        
        if (currentElement == 0) {
            printArrZero.push(currentElement);
        }
    }
        
    for ( let i = 0; i < input.length; i++){
        currentElementPos = input[i];
        if (currentElementPos > 0 && currentElementPos > lastElementPos){
            printArrPositive.push(currentElementPos);
            lastElementPos = currentElementPos;
        } else if (currentElementPos > 0 && currentElementPos < lastElementPos) {
            printArrPositive.unshift(currentElementPos);
            lastElementPos = currentElementPos;
        }
    }

    let finalArr = printArrNegative.concat(printArrPositive).concat(printArrZero);
    
    for ( let i = 0; i < finalArr.length; i ++ ) {
        console.log(`${finalArr[i]}`); //output format problem?
    }
}

negativeOrPositive([7, -2, 8, 9, 18, 20, -3, 0, 4])

//work but 0pts