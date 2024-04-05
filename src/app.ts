interface Greetable {
  name: string;

  greet(phrase: string): void;
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
