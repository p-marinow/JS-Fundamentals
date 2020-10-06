function input (townName, townPopulation, townArea) {
    townName = String(townName);
    townArea = Number(townArea);
    townPopulation = Number(townPopulation);

    console.log(`Town ${townName} has population of ${townPopulation} and area ${townArea} square km.`);

}

input('Sofia', 1286383, 492);