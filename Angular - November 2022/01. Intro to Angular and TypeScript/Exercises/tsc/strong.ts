function isStrongNumber(num: number): boolean {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        const digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
