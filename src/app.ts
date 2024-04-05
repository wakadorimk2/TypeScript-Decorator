interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
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
