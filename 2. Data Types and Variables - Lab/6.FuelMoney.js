function fuelMoney (distance, passangers, priceOfL) {

    let needFuel = (distance/100) * 7;
    needFuel += passangers * 0.100;
    let money = needFuel * priceOfL;
    console.log(`Needed money for that trip is ${money}lv.`);

}

fuelMoney(260, 9, 2.49 );
