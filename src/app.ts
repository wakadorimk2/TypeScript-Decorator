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

function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
}
