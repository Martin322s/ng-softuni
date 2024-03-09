function isDisariumNumber(num: number): boolean {
    const strNum = num.toString();
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sum += parseInt(strNum[i]) ** (i + 1);
    }
    return sum === num;
}
