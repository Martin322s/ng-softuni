function isArmstrong(num: number): boolean {
    const strNum = num.toString();
    const power = strNum.length;
    let sum = 0;
    for (const digit of strNum) {
        sum += parseInt(digit) ** power;
    }
    return sum === num;
}