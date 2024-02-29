function bitcoinMining(array: number[]): void {
    let bitcoin: number = 11949.16;
    let gold: number = 67.51;
    let totalSum: number = 0;
    let day: number = 0;
    let firstDay: number = 0;
    let boughtBitcoin: number = 0;
    let countBitcoin: number = 0;
    let sumBitcoins: number = 0;

    for (let index: number = 0; index < array.length; index++) {
        day++;

        let element: number = array[index];

        if (day % 3 === 0) {
            element *= 0.7;
        }

        let singleDayEarning: number = element * gold;
        totalSum += singleDayEarning;

        if (totalSum >= bitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / bitcoin);
            totalSum -= bitcoin * boughtBitcoin;
            sumBitcoins += boughtBitcoin;
        }

        if (countBitcoin === 1 && firstDay === 0) {
            firstDay = day;
        }
    }

    console.log(`Bought bitcoins: ${sumBitcoins}`);

    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}