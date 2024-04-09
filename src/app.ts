const names: Array<string> = [];
names[0].length

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
