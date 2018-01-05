/* 만능함수 제작 */
function getArea(polygon, ...theArgs) {
  var sidesOfPolygon = Array.from(arguments);
  var checkTypeResult = checkTypes(sidesOfPolygon);
  var checkPositiveNumResult = checkPositiveNum(sidesOfPolygon);
  var checkInputResult = checkInputs(sidesOfPolygon);

  if (checkInputResult && checkTypeResult && checkPositiveNumResult) {
    if (polygon === 'circle' && theArgs.length === 1) {
      return Math.PI * Math.pow(theArgs[0], 2);
    } else if (polygon === 'rect' && theArgs.length === 2) {
      return theArgs[0] * theArgs[1];
    } else if (polygon === 'trap' && theArgs.length === 3) {
      return ((theArgs[0] + theArgs[1]) * theArgs[2]) / 2;
    }
  } else {
    return false;
  }
}



/* 타입을 체크하는 함수 */
function checkTypes(...theArgs) {
  for (var i = 1; i < theArgs[0].length; i++) {
    if (!Number.isInteger(theArgs[0][i])) {
      console.log('숫자형 타입만 계산이 가능합니다.');
      return false;
    } else {
      return true;
    }
  }
}


/* 인자가 있는지 체크하는 함수 */
function checkInputs(...theArgs) {
  for (var i = 1; i <= theArgs[0].length; i++) {
    if (theArgs[0][i] === undefined) {
      console.log('최소 한가지 값이 필요합니다.');
      return false;
    } else {
      return true;
    }
  }
}


/* 양수인지 체크하는 함수 */
function checkPositiveNum(...theArgs) {
  for (var i = 1; i < theArgs[0].length; i++) {
    if (theArgs[0][i] < 0) {
      console.log('입력 값은 0보다 커야 합니다.');
      return false;
    } else {
      return true;
    }
  }
}


console.log("==================================================");
console.log("getArea('circle', 10):", getArea('circle', 10));
console.log("getArea('circle'):", getArea('circle'));
console.log("getArea('circle', -1):", getArea('circle', -1));
console.log("getArea('circle', '10'):", getArea('circle', '10'));
console.log("==================================================");
console.log("getArea('rect', 10, 20):", getArea('rect', 10, 20));
console.log("getArea('rect'):", getArea('rect'));
console.log("getArea('rect', -10, -20):", getArea('rect', -10, -20));
console.log("getArea('rect', '10', '20'):", getArea('rect', '10', '20'));
console.log("==================================================");
console.log("getArea('trap', 10, 20, 5):", getArea('trap', 10, 20, 5));
console.log("getArea('trap'):", getArea('trap'));
console.log("getArea('trap', -10, -20, -5):", getArea('trap', -10, -20, -5));
console.log("getArea('trap', '10', '20', '5'):", getArea('trap', '10', '20', '5'));
console.log("==================================================");