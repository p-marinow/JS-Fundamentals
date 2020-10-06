function solve (inputArr) {
    let newArr = [];

    for(let i = 0; i < inputArr.length; i++){
        let current = inputArr[i];
        if (current % 2 === 0){
                newArr.push(current + i);
        } else {
                newArr.push(current - i);
        }
    }

    console.log(newArr);

    let inputArrSum = 0;
    let newArrSum = 0;

    for (let i  = 0; i < inputArr.length; i++){
        inputArrSum += inputArr[i];
        newArrSum += newArr[i];
    }
    console.log(inputArrSum);
    console.log(newArrSum);
}
solve([5, 15, 23, 56, 35]);