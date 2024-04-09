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

function Log() {
  
}

class Product {
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error(`不正な価格です - 0以下は設定できません`);
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
