// ESM syntax is supported.

let fibonacci = (n) => {
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(20));
console.log(fibonacci(40));
console.log(fibonacci(45));

let fib_cache = [];
let speedy_fib = (n) => {
    if (fib_cache[n] !== undefined) return fib_cache[n];
    if (n == 1) return fib_cache[n] = 0;
    if (n == 2) return fib_cache[n] = 1;
    return fib_cache[n] = (speedy_fib(n-1) + speedy_fib(n-2));
}

console.log(speedy_fib(1));
console.log(speedy_fib(2));
console.log(speedy_fib(3));
console.log(speedy_fib(4));
console.log(speedy_fib(20));
console.log(speedy_fib(40));
console.log(speedy_fib(50));
console.log(speedy_fib(200));
console.log(speedy_fib(2000));

export {}
