// console.log("HELLO TERMINAL");


const fibonacci = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

}
console.log(fibonacci);


const fibo = [0, 2];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);