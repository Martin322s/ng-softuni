function solve(num: number): void {
    let sum: number = 0;
    
    for (let i: number = 1; i <= 10; i++) {
        sum = num * i;
        console.log(`${num} X ${i} = ${sum} `);
    }
}