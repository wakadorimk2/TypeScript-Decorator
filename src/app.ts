const userName = 'Max';
let age = 30;

age = 29;

const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = output => console.log(output);

printOutput(add(2));

const button = document.querySelector('button')

if (button) {
  button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30
};

const coppiedPerson = { ...person };

console.log(person);
console.log(coppiedPerson);
