function sum (num1, num2) {


    num1 = Number(num1);
    num2 = Number(num2);
    let print = 0;
    var array = []; //inLine print

    for (let i = num1; i <= num2; i++){
        array.push(i); // inLine print
        print += i; //sum
    }
    console.log(array.join(' ')); //inLine print
    console.log(`Sum: ${print}`); //sum
}


sum (5, 10);