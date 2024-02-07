function removeDuplicates(arr: Array<number | string>): Array<number | string> {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8]));