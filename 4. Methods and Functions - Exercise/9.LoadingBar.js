function loadingProgress(percent){
    let x = percent / 10;
    let repeat = '%'.repeat(x)+'.'.repeat(10-x);

    if ( percent !== 100 ){
        console.log(`${percent}% [${repeat}]`);
        console.log('Still loading...');
    } else {
        console.log(`${percent}% Complete!`);
        console.log(`[${repeat}]`);
    }
}

loadingProgress(100);