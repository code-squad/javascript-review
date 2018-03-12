function gcd(x, y) {
  let i = 0;
  let result = 0;
  
  while(true) {
    i++;
    if ((x % i === 0) && (y % i === 0)) {
      result = i;
    } // if
    if (i === y || i === x) return result;
  } // while
} // function

console.log(gcd(192, 72));
console.log(gcd(72, 192));
console.log(gcd(10,20));
console.log(gcd(532,462));