function convert (distanceInMeters) {
    distanceInMeters = Number(distanceInMeters);
    let distanceInKm = distanceInMeters / 1000;

    console.log(distanceInKm.toFixed(2));
}

convert (1852);
