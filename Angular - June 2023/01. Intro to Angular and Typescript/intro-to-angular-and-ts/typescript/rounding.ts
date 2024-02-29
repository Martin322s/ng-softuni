function rounding(num: number, prec: number) {
    let ourNumber: number = num;
    let precision: number = prec;

    if (precision > 15) {
        precision = 15;
    }

    let result: string = ourNumber.toFixed(precision);

    console.log(parseFloat(result));
}