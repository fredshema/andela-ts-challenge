function shiftArray(arr) {
    let newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    newArr.push(arr[0]);
    return newArr;
}

console.log(shiftArray([1, 2, 3, 4, 5]));