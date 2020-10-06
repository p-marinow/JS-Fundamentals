function info (name, age, grade) {

    age = Number(age);
    grade = Number(grade);


    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);

}

info ("Asd", 15, 5.4343);