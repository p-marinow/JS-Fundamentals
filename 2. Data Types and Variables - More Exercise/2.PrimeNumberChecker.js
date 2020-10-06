function checker (input){

    input = Math.abs(input);
    let result = true;

    if (input === 2){
        return true;
    } else if (input === 1 || input === 0) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(input); i++){
        if (input % i === 0){
            result = false;
            break;
        }
    }
    return result;

}

checker(7);