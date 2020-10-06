function solve(arr1, arr2){


    for ( let i = 0; i < arr1.length; i++) {
        let firstEl = arr1[i];
        for (let j = 0; j < arr1.length;j++) {
            let secondEl = arr2[j];

            if ( firstEl === secondEl){
                console.log(firstEl);
            }  
        }
    }
}
solve(["Hey", "hello", 2, 4, "Pesho", "e"],
["Pecho", 10, "hey", 4, "hello", "2"]);