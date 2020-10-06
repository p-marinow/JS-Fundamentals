function input (input) {

    input = Number(input);
    let circle = 1;

    for (let i = 0; i < input; i++){
        let outPut = "";
        for ( let j = 0; j < circle; j++){
            outPut += circle + " ";
        }
     
        circle++;
        console.log(outPut);
    }
}

input(3);