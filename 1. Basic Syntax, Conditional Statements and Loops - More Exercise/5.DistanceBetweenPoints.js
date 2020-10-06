function distance (x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    
    var c = Math.sqrt( a*a + b*b );
    console.log(c);
}

distance (2, 4, 5, 0);