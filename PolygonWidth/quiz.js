function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

function GCD(x, y) {
    var remainder = x % y;
    if (remainder === 0) return y;
    return GCD(y, remainder);    
}

console.log(factorial(5));
console.log(GCD(192, 72));