function sum (input){
    input = input.toString();
    let splited = input.split('');
    //console.log(splited); //Обръщам го в масив

    function total (){
        let oddSum = 0;
        let evenSum = 0;
        for (i = 0; i < input.length; i++) {
            let numberX = Number(input[i]);
            if (numberX % 2 == 0){
                evenSum += numberX;
            } else if (numberX % 2 == 1){
                oddSum += numberX;
            }
        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }

    total();
}

sum('3495892137259234')