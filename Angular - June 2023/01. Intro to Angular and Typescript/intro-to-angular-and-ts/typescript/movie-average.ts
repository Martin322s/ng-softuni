function simpleMovingAverage(data: number[], period: number): number[] {
    const result: number[] = [];
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
        if (i >= period) {
            sum -= data[i - period];
            result.push(sum / period);
        }
    }
    return result;
}
