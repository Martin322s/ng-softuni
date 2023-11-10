abstract class Melon {
    constructor(public weight: number, public melonSort: string) { }

    abstract getElement(): string;

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Watermelon extends Melon {
    getElement(): string {
        return 'Water';
    }

    toString(): string {
        return `Element: ${this.getElement()}
                Sort: ${this.melonSort}
                Element Index: ${this.elementIndex}
                `;
    }
}

class Firemelon extends Melon {
    getElement(): string {
        return 'Fire';
    }

    toString(): string {
        return `Element: ${this.getElement()}
                Sort: ${this.melonSort}
                Element Index: ${this.elementIndex}
                `;
    }
}

class Earthmelon extends Melon {
    getElement(): string {
        return 'Earth';
    }

    toString(): string {
        return `Element: ${this.getElement()}
                Sort: ${this.melonSort}
                Element Index: ${this.elementIndex}
                `;
    }
}

class Airmelon extends Melon {
    getElement(): string {
        return 'Air';
    }

    toString(): string {
        return `Element: ${this.getElement()}
                Sort: ${this.melonSort}
                Element Index: ${this.elementIndex}
                `;
    }
}

class Melolemonmelon extends Watermelon {
    private static ELEMENTS: string[] = ['Water', 'Fire', 'Earth', 'Air'];
    private currentElementIndex: number = 0;

    morph(): void {
        this.currentElementIndex = (this.currentElementIndex + 1) % Melolemonmelon.ELEMENTS.length;
    }

    getElement(): string {
        return Melolemonmelon.ELEMENTS[this.currentElementIndex];
    }

    toString(): string {
        return super.toString();
    }
}