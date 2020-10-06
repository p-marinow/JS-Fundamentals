function symbol(symbol) {
    let code = symbol.charCodeAt(0);

    if (code >= 97 && code <= 122){
        console.log('lower-case');
    }
    if (code >= 65 && code <= 90){
        console.log('upper-case');
    }
}

symbol('L');