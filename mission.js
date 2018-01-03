var calculateCircle = function (radius) {
  if (arguments.length < 1) {
    throw new Error('최소 한가지 값이 필요합니다.');
  } else if (typeof (radius) !== 'number') {
    throw new Error('숫자형타입만 계산이 가능합니다.');
  } else if (radius < 0) {
    throw new Error('반지름은 0보다 커야 합니다.');
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
}

var calculateRectangle = function (width, height) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments.length < 2) {
      throw new Error('최소 두 가지 값이 필요합니다');
    } else if (typeof (arguments[i]) !== 'number') {
      throw new Error('숫자형타입만 계산이 가능합니다.');
    } else if (arguments[i] < 0) {
      throw new Error('밑변과 높이는 0보다 커야 합니다');
    } else {
      return width * height;
    }
  }
}

var calculateTrapezoid = function (base, upper, height) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments.length < 3) {
      throw new Error("최소 세 가지 값이 필요합니다.");
    } else if (typeof (arguments[i]) !== 'number') {
      throw new Error('숫자형타입만 계산이 가능합니다.');
    } else if (arguments[i] < 0) {
      throw new Error('밑변과 윗변과 높이는 0보다 커야 합니다');
    } else {
      return ((base + upper) * height) / 2
    }
  }
}


function Error(message) {
  this.message = message;
  this.name = 'Error';
}

console.log("=========================================================");
console.log("calculateCircle(10): ", calculateCircle(10));
// console.log("calculateCircle('10'): ", calculateCircle("10"));
// console.log("calculateCircle(): ", calculateCircle());
// console.log("calculateCircle(-1): ", calculateCircle(-1));
console.log("=========================================================");
console.log("calculateRectangle(10, 15): ", calculateRectangle(10, 15));
console.log("calculateRectangle(10, 15, 20): ", calculateRectangle(10, 15, 20));
// console.log("calculateRectangle('10', '15'): ", calculateRectangle('10', '15'));
// console.log("calculateRectangle(): ", calculateRectangle());
// console.log("calculateRectangle(-1): ", calculateRectangle(-10, -15));
console.log("=========================================================");
console.log("calculateTrapezoid(10, 5, 12): ", calculateTrapezoid(10, 5, 12));
console.log("calculateTrapezoid(10, 5, 12, 13, 14): ", calculateTrapezoid(10, 5, 12, 13, 14));
// console.log("calculateTrapezoid('10', '5', '12'): ", calculateTrapezoid('10', '5', '12'));
// console.log("calculateTrapezoid(): ", calculateTrapezoid());
// console.log("calculateTrapezoid(-10, -5, -12): ", calculateTrapezoid(-10, -5, -12));
console.log("=========================================================");