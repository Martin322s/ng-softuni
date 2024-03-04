function isPangram(str: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseStr = str.toLowerCase();
    for (const char of alphabet) {
        if (!lowercaseStr.includes(char)) {
            return false;
        }
    }
    return true;
}
