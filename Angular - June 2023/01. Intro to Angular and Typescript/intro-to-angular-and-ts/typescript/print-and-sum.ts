function solve(start: number, end: number): void {
    let startNum: number = start;
    let endNum: number = end;
    let output: string = "";
    let sum: number = 0;

    for (let i: number = startNum; i <= endNum; i++) {
        output += `${i} `;
        sum += i;
    }
    
    console.log(output);
    console.log(`Sum: ${sum}`);
}