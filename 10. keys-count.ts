function keysCount(obj: Object): number {
    return Object.keys(obj).length;
}

console.log(keysCount({a: 1, b: 2, c: 3, d: 4, e: 5}));