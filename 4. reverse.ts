function reverse(str: string): string {
    let temp = "";
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}

console.log(reverse("hello"));