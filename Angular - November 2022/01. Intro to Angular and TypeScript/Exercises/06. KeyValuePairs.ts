class KeyValue<T, U> {
    private key: T | undefined;
    private value: U | undefined;

    setKeyValue(key: T, value: U): void {
        this.key = key;
        this.value = value;
    }

    display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}