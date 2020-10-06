function numbers (num) {


    num = Number(num);

    for (let i = num; i > 0; i--){
        console.log(num);
        num--;
    }

}

numbers (5);