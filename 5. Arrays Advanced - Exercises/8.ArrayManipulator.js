function solve(arr, commands) {

    for ( let currentCommand of commands ) {
        let tokens = currentCommand.split(' ');
        let command = tokens[0];

        if ( command === 'add' ) {
            let index = Number(tokens[1]);
            let number = Number(tokens[2]);

            arr.splice(index, 0, number);
        } else if ( command === 'addMany' ) {
            let index = Number(tokens[1]);
            let elements = tokens
                .slice(2)
                .map(Number);

            arr.splice(index, 0, ...elements);
        } else if ( command === 'contains' ) {
            console.log(arr.indexOf(tokens[1]));
        } else if ( command === 'remove' ) {
            let index = Number(tokens[1]);
            arr.splice(index, 1);
        } else if ( command === 'shift' ) {
            let positions = Number(tokens[1]);
            position %= arr.length;
            arr.slice(0, positions);
            
        }


    }
}

solve([1, 2, 3, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])