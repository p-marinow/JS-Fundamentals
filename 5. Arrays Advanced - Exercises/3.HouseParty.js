function solve(input) {
    let list = [];

    for (let currentCommand of input) {
        let tokens = currentCommand.split(' ');
    
        if ( tokens.length == 3 ) {
            addToList(tokens[0]);
        } else {
            removeFromList(tokens[0]);
        }
    }

    function addToList(guest){
        if ( !list.includes(guest) ) {
            list.push(guest)
        } else {
            console.log(`${guest} is already in the list!`);
        }
    }

    function removeFromList(guest){
        if ( list.includes(guest) ) {
            let index = list.indexOf(guest);
            list.splice(index, 1);
        } else {
            console.log(`${guest} is not in the list!`);
        }
    }

    console.log(list.join('\n'));
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);