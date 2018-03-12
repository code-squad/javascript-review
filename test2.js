function getResult(n, base){
  var arr = [];
  for(n; n >= 1; n /= base){
    n = Math.floor(n);
    arr.unshift(n%base);
  }
  arr = +(arr.join(''));
  return arr;
}

function equal(arr, base) {
  for(var i = 0; i < arr.length; i++) {
    if(getResult(arr[i], base) !== +((arr[i]).toString(base))) return false;
  }
  return true;
}

console.log(equal([124, 125, 1255, 1111, 90, 0],2));