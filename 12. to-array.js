function toArray(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }

    return arr;
}

console.log(toArray({ a: 1, b: 2, c: 3, d: 4, e: 5 }));