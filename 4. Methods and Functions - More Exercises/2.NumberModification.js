function modification(input) {
    input = input.toString();
    let newArr = input.split('');
    let total = 0;

    // for ( let i = 0; i < newArr.length; i++ ) {
    //     total += Number(newArr[i]);
    // } //няма нужда от първия FOR цикъл, дублира се с този в WHILE

    while ( total / newArr.length < 5 ){
        newArr.push('9');
        total = 0;
        for ( let i = 0; i < newArr.length; i++ ) {
            total += Number(newArr[i]);
        }
    }

    console.log(`${newArr.join('')}`);
}

modification(101)