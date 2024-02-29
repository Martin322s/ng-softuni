function login(inputArray: string[]): void {
    const userName: string | undefined = inputArray.shift();

    const reverseString = function (word: string) {
        const splited: string[] = word.split('');
        const reversed: string = splited.reverse().join('');
        return reversed;
    }

    for (let i: number = 0; i < inputArray.length; i += 1) {
        if (userName == reverseString(inputArray[i])) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            if (i == 3) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}