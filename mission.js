var calculateCircle = function (radius) {
  if (arguments.length < 1) {
    return '최소 한가지 값이 필요합니다.';
  } else if (!isNumbers(Array.from(arguments)[0])) {
    return '숫자형타입만 계산이 가능합니다.';
  } else if (radius < 0) {
    return '반지름은 0보다 커야 합니다.';
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
}


var calculateRectangle = function (width, height) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments.length < 2) {
      return '최소 두 가지 값이 필요합니다';
    } else if (!isNumbers(Array.from(arguments)[i])) {
      return '숫자형타입만 계산이 가능합니다.';
    } else if (arguments[i] < 0) {
      return '밑변과 높이는 0보다 커야 합니다';
    } else {
      return width * height;
    }
  }
}

function calculateTrapezoid(base, upper, height) {
  for (var i = 0; i < arguments.length; i++) {
    if (!isNumbers(Array.from(arguments)[i])) {
      return '숫자형 타입만 계산이 가능합니다.';
    } else if (arguments.length < 3) {
      return '최소 세 가지 값이 필요합니다.';
    } else if (arguments[i] < 0) {
      return '밑변과 윗변과 높이는 0보다 커야 합니다.';
    } else {
      return ((base + upper) * height) / 2;
    }
  }
}


function isNumbers(args) {
  for (var i = 0; i < arguments.length; i++) {
    return Number.isInteger(Array.from(arguments)[i]);
  }
}




console.log("==================================================");
console.log("calculateCircle(10):", calculateCircle(10));
console.log("calculateCircle(10, 20):", calculateCircle(10, 20));
console.log("calculateCircle('10'):", calculateCircle('10'));
console.log("calculateCircle():", calculateCircle());
console.log("calculateCircle(-1):", calculateCircle(-1));
console.log("==================================================");
console.log("|");
console.log("==================================================");
console.log("calculateRectangle(10, 15):", calculateRectangle(10, 15));
console.log("calculateRectangle(10, 15, 20):", calculateRectangle(10, 15, 20));
console.log("calculateRectangle('10', '15'):", calculateRectangle('10', '15'));
console.log("calculateRectangle(10):", calculateRectangle(10));
console.log("calculateRectangle(-10, -15):", calculateRectangle(-10, -15));
console.log("==================================================");
console.log("|");
console.log("==================================================");
console.log("calculateTrapezoid(10, 5, 12):", calculateTrapezoid(10, 5, 12));
console.log("calculateTrapezoid(10, 5, 12, 13, 14):", calculateTrapezoid(10, 5, 12, 13, 14));
console.log("calculateTrapezoid('10', '5', '12'):", calculateTrapezoid('10', '5', '12'));
console.log("calculateTrapezoid(10):", calculateTrapezoid(10));
console.log("calculateTrapezoid(-10, -5, -12):", calculateTrapezoid(-10, -5, -12));
console.log("==================================================");



// function getArea(shape, a, b, c) {
//   if (shape === 'circle') {
//     if (arguments.length === 2) {
//       return calculateCircle(a)
//     } else if (arguments.length === 3) {
//       for (var i = a; i <= b; i++) {
//         console.log(calculateCircle(i));
//       }
//     }
//   } else if (shape === 'rect') {
//     return calculateRectangle(a, b)
//   } else if (shape === 'trapezoid') {
//     return calculateTrapezoid(a, b, c)
//   }
// }



// console.log("=========================================================");
// console.log("getArea('circle', 10):", getArea('circle', 10));
// console.log("getArea('rect', 10, 15):", getArea('rect', 10, 15));
// console.log("getArea('trapezoid', 10, 15, 12):", getArea('trapezoid', 10, 15, 12));
// console.log("getArea('circle', 1, 100):", getArea('circle', 1, 100));
// console.log("=========================================================");