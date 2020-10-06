function grades (grade){

    if ( grade >= 2.00 && grade < 3.00 ){
        console.log(`Fail`);
    } else if ( grade <= 3.49 && grade > 2.99) {
        console.log(`Poor`);
    } else if ( grade <= 4.49 && grade > 3.49){
        console.log(`Good`);
    } else if ( grade <= 5.49 && grade > 4.49){
        console.log(`Very good`);
    } else {
        console.log(`Exellent`);
    }
}

grades(2.99)

//80 score?