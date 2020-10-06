function solve(input) {
    let distinctArray = input.filter((el, i) => {
        return input.indexOf(el) === i;
    });

    console.log(distinctArray.join(' '));
}

// function solve2(input) {
//     let distinctArray = [];
    
//     for ( let i = 0; i < input.length; i++ ) {
//         if (!distinctArray.includes(input[i])) {
//             distinctArray.push(input[i]);
//         }
//     }
// } // Втори вариант за решаване на задачата с по-дълъг метод;
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])