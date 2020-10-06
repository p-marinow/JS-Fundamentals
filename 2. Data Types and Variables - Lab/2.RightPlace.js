function missing (missing, char, word) {
    let res = missing.replace('_', char);
    let outPut = res === word ? 'Matched' : 'Not Matched';
    console.log(outPut);
}

missing('Str_ng', 'i', 'String');