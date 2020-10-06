function calcOrder (product, quantity){
    quantity = Number(quantity);
    let total = 0;
    let priceEach = 0;

    switch(product){
        case "water":
            priceEach = 1.00;
            total = priceEach * quantity; break;
        case "coffee":
            priceEach = 1.50;
            total = priceEach * quantity; break;
        case "coke":
            priceEach = 1.40;
            total = priceEach * quantity; break;
        case "snacks":
            priceEace = 2.00;
            total = priceEach * quantity; break;
    }
        
    console.log(total.toFixed(2));
}

calcOrder('coffee', 2)

//80pts?