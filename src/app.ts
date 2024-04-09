const names: Array<string> = [];
names[0].length

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('終わりました！');
    }, 2000);
});
