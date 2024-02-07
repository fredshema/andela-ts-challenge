function toArray(obj: Object) {
    let arr = [] as Array<[string, number]>;
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }

    return arr;
}

console.log(toArray({ a: 1, b: 2, c: 3, d: 4, e: 5 }));