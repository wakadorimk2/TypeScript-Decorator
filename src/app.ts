interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hello ! I am');
