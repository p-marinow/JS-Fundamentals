function mining (fieldArea){

    let firstDayMined = fieldArea;
    let availableMined = firstDayMined;
    let storageSpice = 0;
    let dayCounter = 0;
    let workersConsume = 26;

    while (availableMined >= 100) {
        storageSpice += availableMined;
        storageSpice -= workersConsume;
        dayCounter++;
        availableMined -= 10;
        console.log(`Day ${dayCounter} we extract ${firstDayMined} spice and at the end of the shift, the workers consume ${workersConsume}, leaving 85. The yield drops by 10 to ${availableMined}. `);

    }

    storageSpice -= workersConsume;
    console.log(`Since the expected yield is less than 100, we abandon the source. The workers take another ${workersConsume}, leaving ${storageSpice}. The mine has operated ${dayCounter} days.`);

}

mining (111);