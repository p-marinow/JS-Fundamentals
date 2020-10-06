function sum (input) {
    input = Number(input);
    let sum = 1;
    let total = 0;
    
    for (let i = 1; i <= input; i++){
        console.log(sum);
        total += sum;
        sum += 2;

    }

    console.log(`Sum: ${total}`);
}

sum (5);