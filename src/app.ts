// const names: Array<string> = [];
// names[0].length

// const promise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj =  merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = "値がありません。"
    if (element.length > 0) {
        descriptionText = '値は' + element.length + 'です。';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('お疲れさまです！'));
