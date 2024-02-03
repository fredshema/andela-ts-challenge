function sameKeys(obj1, obj2) {
    for (let key in obj1) {
        if (key in obj2) {
            return true;
        }
    }
    return false;
}

console.log(sameKeys(
    { a: 1, b: 2 },
    { a: 1, c: 3 }
)); // true
console.log(sameKeys(
    { a: 1, b: 2 },
    { c: 1, d: 2 }
)); // false