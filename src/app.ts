function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const hookEL = document.getElementById(hookId);
    if (hookEL) {
      hookEL.innerHTML = template;
    }
  }
}

// @Logger("ログ出力中 - PERSON")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = 'Max';

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);
