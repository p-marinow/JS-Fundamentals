function area(a, b, c){
    let s = (a+b+c)/2;
    let sa = s-a;
    let sb = s-b;
    let sc = s-c;
    let triangleArea = Math.sqrt(((s)*sa*sb*sc));
    
    console.log(triangleArea);
}

area(2, 3.5, 4);