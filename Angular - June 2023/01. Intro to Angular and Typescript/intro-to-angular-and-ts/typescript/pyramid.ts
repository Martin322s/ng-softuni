function pyramid(base: number, increment: number): void {
    let totalstone: number = 0;
    let totalmarble: number = 0;
    let totallapis: number = 0;
    let totalgold: number = 0;
    let row: number = 0;
    let currentbase: number = base;

    while (currentbase > 2) {
        let marbel: number = currentbase * 4 - 4;
        let stone: number = currentbase * currentbase - marbel;
        totalstone += stone;
        row++;

        if (row % 5 === 0) {
            totallapis += marbel;
        } else {
            totalmarble += marbel;
        }
        currentbase -= 2;
    }

    row++;
    let gold: number = currentbase * currentbase;

    let stone: number = Math.ceil(totalstone * increment);
    let marble: number = Math.ceil(totalmarble * increment);
    let lapis: number = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    let totalHeight: number = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}