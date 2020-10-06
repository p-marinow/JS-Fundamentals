function vacation (people, groupType, day) {

    people = Number(people);
    let price = 0;
    let studentsPrice = 0;
    let bussinessPrice = 0;
    let regularPrice = 0;



    switch(day) {
        case "Friday":
        studentsPrice = 8.45;
        bussinessPrice = 10.90;
        regularPrice = 15;
        break;
 
        case "Saturday":
        studentsPrice = 9.80;
        bussinessPrice = 15.60;
        regularPrice = 20;
        break;


        case "Sunday":
        studentsPrice = 10.46;
        bussinessPrice = 16;
        regularPrice = 22.50;
        break;
    }




    if ( groupType === "Students" && people >= 30){
        price = studentsPrice * people * 0.85;
    }  else if ( groupType === "Students" && people < 30) {
        price = studentsPrice * people;
    }


    if (groupType==="Business" && people >= 100) {
        price = bussinessPrice * people - bussinessPrice * 10;
    } else if (groupType==="Business" && people < 100){
        price = bussinessPrice * people;
    }

    if (groupType === "Regular" && people >= 10 && people <= 20) {
        price = regularPrice * people * 0.95;
    } else if (groupType === "Regular" && people < 10){
        price = regularPrice * people;
    } else if (groupType === "Regular" && people > 20){
        price = regularPrice * people;
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}


vacation("30", "Students", "Sunday");