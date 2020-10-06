function buildingUp (base, increment) {

    base = Number(base);
    increment = Number(increment);

    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;

    let currentbase = base;
    let rows = 0;


        while (currentbase > 2) {
            let marble = currentbase*4-4;
            let stone = currentbase * currentbase - marble;
            totalstone += stone;
            
            rows++;
            if (rows % 5 === 0){
                totallapis += marble;
            } else {
                totalmarble +=marble;
            }
            currentbase -=2;
        }
    rows++;
    let gold = currentbase * currentbase;

    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(rows * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);

}


buildingUp(11, 1);