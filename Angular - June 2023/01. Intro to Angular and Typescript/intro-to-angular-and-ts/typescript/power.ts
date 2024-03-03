function power(base: number, exponent: number): number {
    if (exponent === 0) {
        return 1;
    }
    if (exponent === 1) {
        return base;
    }
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    if (exponent % 2 === 0) {
        const halfPower = power(base, exponent / 2);
        return halfPower * halfPower;
    } else {
        return base * power(base, exponent - 1);
    }
}