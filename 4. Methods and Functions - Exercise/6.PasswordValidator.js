function passwordValidation (password) {
    let validLength = true;
    let validContent = true;
    let validDigits = true;

    if (!passwordLength(password)){
        console.log('Password must be between 6 and 10 characters');
        validLength = false;
    }

    if (!passwordContent(password)){
        console.log('Password must consist only of letters and digits');
        validContent = false;
    }

    if(!hasTwoDigits(password)){
        console.log('Password must have at least 2 digits');
        validDigits = false;
    }

    function passwordLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function passwordContent (password) {
        let isValid = true;

        for ( i = 0; i < password.length; i++){
            let symbol = password[i];

            if (isNaN(+symbol) && symbol.toLowerCase() === symbol.toUpperCase()){
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    function hasTwoDigits (password) {
        let counter = 0;

        for ( let i = 0; i < password.length; i++ ){
            if (Number.isInteger(+password[i])) { 
                counter++;
            }
        }

        return counter >= 2;
    }

    if ( validLength && validDigits && validContent ){
        console.log('Password is valid');
    }
}

passwordValidation('MyPass123');