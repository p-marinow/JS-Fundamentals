function solve(array, indexRot){

    for ( let i = 0; i < indexRot; i++){
        let firstEl = array[0];

        for ( let j = 0; j < array.length - 1; j++){
            array[j] = array[j + 1];
        }
        array[array.length - 1] = firstEl;
    }

    console.log(array.join(' '));
}
solve([51, 47, 32, 61, 21], 2);
