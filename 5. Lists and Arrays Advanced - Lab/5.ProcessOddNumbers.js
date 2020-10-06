function solve(arr){
    let result = arr
        .filter(x => x % 2 === 1)
        .map(x => x * 2)
        .reverse()
    console.log(result.join(' '));
}
solve([0, 11, 6, 14, 23, 55])

//works but 20pts?