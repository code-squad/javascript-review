var calculateCircle = function (radius) {
  if (arguments.length !== 1) {
    return '1개의 인자가 필요합니다.'
  } else if (typeof (radius) !== 'number') {
    return '숫자형타입만 계산이 가능합니다.'
  } else if (radius < 0) {
    return '반지름은 0보다 커야 합니다'
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
}

var calculateRectangle = function (width, height) {
  if (arguments.length !== 2) {
    return '2개의 인자가 필요합니다'
  } else if (typeof (width) !== 'number' && typeof (height) !== 'number') {
    return '숫자형타입만 계산이 가능합니다.'
  } else if (width < 0 && height < 0) {
    return '밑변과 높이는 0보다 커야 합니다'
  } else {
    return width * height;
  }
}

function calculateTrapezoid(base, upper, height) {
  if (arguments.length !== 3) {
    return "3개의 인자가 필요합니다."
  } else if (typeof (base) !== 'number' && typeof (upper) !== 'number' && typeof (height) !== 'number') {
    return '숫자형타입만 계산이 가능합니다.'
  } else if (base < 0 && upper < 0 && height < 0) {
    return '밑변과 윗변과 높이는 0보다 커야 합니다'
  } else {
    return ((base + upper) * height) / 2
  }
}



console.log("=========================================================");
console.log("calculateCircle(10): ", calculateCircle(10));
console.log("calculateCircle('10'): ", calculateCircle("10"));
console.log("calculateCircle(): ", calculateCircle());
console.log("calculateCircle(-1): ", calculateCircle(-1));
console.log("=========================================================");
console.log("calculateRectangle(10, 15): ", calculateRectangle(10, 15));
console.log("calculateRectangle('10', '15'): ", calculateRectangle('10', '15'));
console.log("calculateRectangle(): ", calculateRectangle());
console.log("calculateRectangle(-1): ", calculateRectangle(-10, -15));
console.log("=========================================================");
console.log("calculateTrapezoid(10, 5, 12): ", calculateTrapezoid(10, 5, 12));
console.log("calculateTrapezoid('10', '5', '12'): ", calculateTrapezoid('10', '5', '12'));
console.log("calculateTrapezoid(): ", calculateTrapezoid());
console.log("calculateTrapezoid(-10, -5, -12): ", calculateTrapezoid(-10, -5, -12));
console.log("=========================================================");