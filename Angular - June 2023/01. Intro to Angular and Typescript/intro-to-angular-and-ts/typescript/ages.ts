function ages(input: number): void {
    let age: number = input;

    if ((age >= 0) && (age <= 2)) {
        console.log("baby");
    } else if ((age >= 3) && (age <= 13)) {
        console.log("child");
    } else if ((age >= 14) && (age <= 19)) {
        console.log("teenager");
    } else if ((age >= 19) && (age <= 65)) {
        console.log("adult");
    } else if (age >= 66) {
        console.log("elder");
    } else if (age < 0) {
        console.log("out of bounds");
    }
}