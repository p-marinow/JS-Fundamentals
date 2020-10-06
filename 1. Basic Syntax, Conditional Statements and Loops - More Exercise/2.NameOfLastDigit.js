function solve (input){

    input = String(input);
    let counter = input.length;
        if (input.length > 1){
            for ( let i = 1; i < counter; i++ ){
                input = input.slice(1);
            }
        }   else {
          input = input;
        }     
        if ( input === "1") {
            console.log("one");
        } else if ( input === "2") {
            console.log("two");
        } else if ( input === "3") {
            console.log("three");
        } else if ( input === "4") {
            console.log("four");
        } else if ( input === "5") {
            console.log("five");
        } else if ( input === "6") {
            console.log("six");
        } else if ( input === "7") {
            console.log("seven");
        } else if ( input === "8") {
            console.log("eight");
        } else if ( input === "9") {
            console.log("nine");
        } else if ( input === "0"){
            console.log("zero");
        }

}

solve(1);