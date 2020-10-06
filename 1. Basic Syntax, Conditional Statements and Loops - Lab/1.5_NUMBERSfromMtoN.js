function range (m, n) {

        m = Number(m);
        n = Number(n);
        
        while (m >= n) {
            console.log(m);
            m--;
        }

}

range (6, 2);