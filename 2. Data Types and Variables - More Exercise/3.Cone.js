function cone(radius, height){

    let volume = (Math.PI*radius*radius*height)/3;
    let SA = Math.sqrt(radius* radius + height*height);
    let surfaceArea = Math.PI*radius*radius + Math.PI*radius*SA;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5);