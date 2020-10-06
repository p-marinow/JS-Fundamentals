function solve(input) {

    console.log(input.sort(sortProducts)
        .join('\n'));  //'\n' принтира на нов ред;

    function sortProducts(a, b) {
        let aLength = a.length;
        let bLength = b.length;
        let result = a.length - b.length;

        //alphabetical sort
        if ( result === 0 ) {
            return a.localeCompare(b);
        }
        return result;
    }
}

solve(["alpha", "beta", "gamma"])