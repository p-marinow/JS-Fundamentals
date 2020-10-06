function solve(input) {
    let sortedInAscending = input.sort((a, b) => {
        return a - b;
    })

    let sliced = sortedInAscending.slice(0, 2);
    console.log(sliced.join(' '));
}

solve([3, 0, 10, 4, 7, 3])