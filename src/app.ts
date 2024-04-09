function Logger(logString: string) {
  console.log('LOGGER ファクトリ');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('WithTemplate ファクトリ');
  return function(constructor: any) {
    console.log('テンプレートを表示');
    const hookEL = document.getElementById(hookId);
    const p = new constructor();
    if (hookEL) {
      hookEL.innerHTML = template;
      hookEL.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger("ログ出力中 - PERSON")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = 'Max';

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);

// ...

class Product {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
