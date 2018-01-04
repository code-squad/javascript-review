/* 삼각형을 제작하는 함수 */
function getCircle(radius) {
  var checkTypeResult = checkTypes(Array.from(arguments));
  var checkPositiveNumResult = checkPositiveNum(Array.from(arguments));
  var checkShapeResult = checkShape("circle", Array.from(arguments));

  if (!checkTypeResult) {
    return checkTypeResult;
  } else if (!checkPositiveNumResult) {
    return checkPositiveNumResult;
  } else if (!checkShapeResult) {
    return checkShapeResult;
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
}


/* 사각형을 제작하는 함수 */
function getRectangle(width, height) {
  var checkTypeResult = checkTypes(Array.from(arguments));
  var checkPositiveNumResult = checkPositiveNum(Array.from(arguments));
  var checkShapeResult = checkShape("rect", Array.from(arguments));

  if (!checkTypeResult) {
    return checkTypeResult;
  } else if (!checkPositiveNumResult) {
    return checkPositiveNumResult;
  } else if (!checkShapeResult) {
    return checkShapeResult;
  } else {
    return width * height;
  }
}


/* 사다리꼴을 제작하는 함수 */
function getTrapezoid(base, upper, height) {
  var checkTypeResult = checkTypes(Array.from(arguments));
  var checkPositiveNumResult = checkPositiveNum(Array.from(arguments));
  var checkShapeResult = checkShape("trap", Array.from(arguments));

  if (!checkTypeResult) {
    return checkTypeResult;
  } else if (!checkPositiveNumResult) {
    return checkPositiveNumResult;
  } else if (!checkShapeResult) {
    return checkShapeResult;
  } else {
    return ((base + upper) * height) / 2;
  }
}


/* 타입을 체크하는 함수 */
function checkTypes(...theArgs) {
  for (var i = 0; i < theArgs.length; i++) {
    if (!Number.isInteger(theArgs[0][i])) {
      console.log('숫자형 타입만 계산이 가능합니다');
      return false;
    } else {
      return true;
    }
  }
}


/* 양수인지 체크하는 함수 */
function checkPositiveNum(component) {
  for (var i = 0; i < component.length; i++) {
    if (component[i] < 0) {
      console.log('입력 값은 0보다 커야 합니다');
      return false;
    } else {
      return true;
    }
  }
}


/* 각 도형에 인자의 갯수가 알맞게 들어갔는지 체크하는 함수 */
function checkShape(shape, num) {
  if (shape === 'circle' && num.length < 1) {
    console.log('1개의 인자가 필요합니다.');
    return false;
  } else if (shape === 'rect' && num.length < 2) {
    console.log("2개의 인자가 필요합니다.");
    return false;
  } else if (shape === 'trap' && num.length < 3) {
    console.log("3개의 인자가 필요합니다.");
    return false;
  } else {
    return true;
  }
}



console.log("==================================================");
console.log("getCircle(10):", getCircle(10));
console.log("getCircle(10, 20):", getCircle(10, 20));
console.log("getCircle('10'):", getCircle('10'));
console.log("getCircle():", getCircle());
console.log("getCircle(-1):", getCircle(-1));
console.log("==================================================");
console.log("|");
console.log("==================================================");
console.log("getRectangle(10, 15):", getRectangle(10, 15));
console.log("getRectangle(10, 15, 20):", getRectangle(10, 15, 20));
console.log("getRectangle('10', '15'):", getRectangle('10', '15'));
console.log("getRectangle(10):", getRectangle(10));
console.log("getRectangle(-10, -15):", getRectangle(-10, -15));
console.log("==================================================");
console.log("|");
console.log("==================================================");
console.log("getTrapezoid(10, 5, 12):", getTrapezoid(10, 5, 12));
console.log("getTrapezoid(10, 5, 12, 13, 14):", getTrapezoid(10, 5, 12, 13, 14));
console.log("getTrapezoid('10', '5', '12'):", getTrapezoid('10', '5', '12'));
console.log("getTrapezoid(10, 5):", getTrapezoid(10, 5));
console.log("getTrapezoid(-10, -5, -12):", getTrapezoid(-10, -5, -12));
console.log("=================================================="); 
