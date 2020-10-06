function solve(nums, params) {
    let [ take, deleteCount, searched ] = params;

    let sliced = nums.slice(0, take);
    sliced.splice(0, deleteCount);
    let searchedArray = sliced.filter((x) => x === searched);
    console.log(`Number ${searched} occurs ${searchedArray.length} times.`);
}

solve([5, 2, 3, 4, 1, 6],
[5, 2, 3]
)