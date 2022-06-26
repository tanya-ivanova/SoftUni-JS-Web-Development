function cats(input) {
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow () {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let name = tokens[0];
        let age = Number(tokens[1]);

        let currentCat = new Cat(name, age);
        currentCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);