function prime(num: number): boolean {
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

console.log(prime(1));