class Box<T> {
    private contents: T[] = [];

    add(element: T): void {
        this.contents.push(element);
    }

    remove(): T | undefined {
        return this.contents.pop();
    }

    get count(): number {
        return this.contents.length;
    }
}