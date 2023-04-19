class KeyValue<T, U> {
    private key: T;
    private value: U;

    setKeyValue(key: T, value: U): void {
        this.key = key;
        this.value = value;
    }

    display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
};