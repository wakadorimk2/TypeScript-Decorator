function Logger() {
  console.log("ログ出力中...");
}

class Person {
  name = 'Max';

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);
