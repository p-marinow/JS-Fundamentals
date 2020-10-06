function currencyConvertion (pounds) {
    pounds = Number(pounds);
    let dollar = pounds * 1.31;

    console.log(dollar.toFixed(3));

}
currencyConvertion(80);