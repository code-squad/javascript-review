function gcd(x, y) {
  let i = 0;
  let result = 0;
  
  while(true) {
    i++;
    if (i === y || i === x) return result;
    if ((x % i === 0) && (y % i === 0)) {
      result = i;
    } // if
  } // while
} // function

console.log(gcd(192, 72));
console.log(gcd(72, 192));