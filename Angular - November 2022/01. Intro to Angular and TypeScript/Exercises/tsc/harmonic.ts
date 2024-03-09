function harmonicMean(numbers: number[]): number {
    const reciprocals = numbers.map(num => 1 / num);
    const sumReciprocals = reciprocals.reduce((acc, curr) => acc + curr, 0);
    return numbers.length / sumReciprocals;
}
