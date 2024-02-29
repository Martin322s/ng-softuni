function triangle(num: number): void {
    for (let i: number = 1; i <= num; i++) {
        let output: string = " ";
        for (let j: number = 1; j <= i; j++) {
            output += `${i} `;
        }
        console.log(output);
    }
}