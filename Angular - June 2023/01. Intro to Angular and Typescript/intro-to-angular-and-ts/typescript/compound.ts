function compoundInterest(principal: number, rate: number, time: number, frequency: number): number {
    const n = frequency;
    const r = rate / 100 / frequency;
    const t = time * frequency;
    return principal * (Math.pow((1 + r), t) - 1);
}