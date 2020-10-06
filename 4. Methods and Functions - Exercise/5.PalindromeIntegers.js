function palindrome (array) {

    for ( i = 0; i < array.length; i++){
        let number = String(array[i]);
        let numberSplit = number.split('');
        let numberReverse = numberSplit.reverse();
        let numberJoin = numberReverse.join("");   
        // console.log(number);
        // console.log(numberJoin);
        
        if ( number == numberJoin){
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindrome([123,323,421,121])
//100pts