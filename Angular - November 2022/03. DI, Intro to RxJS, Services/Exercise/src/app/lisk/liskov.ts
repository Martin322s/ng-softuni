// Съобразен с LSP:
class Animal {
    move() {
        console.log('Animal is moving.');
    }
}

class Bird extends Animal {
    move() {
        console.log('Bird is flying.');
    }
}

class Fish extends Animal {
    move() {
        console.log('Fish is swimming.'); // Презаписваме метода move() за да отразим специфичното поведение на Fish
    }

    swim() {
        console.log('Fish is swimming.');
    }
}

function makeAnimalMove(animal: Animal) {
    animal.move();
}

const bird = new Bird();
const fish = new Fish();

makeAnimalMove(bird);
makeAnimalMove(fish);  