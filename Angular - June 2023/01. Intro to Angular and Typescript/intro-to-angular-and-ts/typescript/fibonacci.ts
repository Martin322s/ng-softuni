function fibonacci(n: number): number {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}