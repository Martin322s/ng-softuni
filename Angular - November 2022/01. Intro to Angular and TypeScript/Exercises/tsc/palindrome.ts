function isPalindromeNumber(num: number): boolean {
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
}
