function makeAreaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function makeAreaofSquare(width, height) {
  return width * height;
}

function makeAreaOfTrapezoid(base, upper, height) {
  if(arguments.length == 2) {
    return "3개의 인자가 필요합니다."
  } else {
    return ((base + upper) * height) / 2
  }
}


(function () {
  console.log("원의 넓이: ", makeAreaOfCircle(10));
  console.log("사각형의 넓이: ", makeAreaofSquare(10, 15));
  console.log("사다리꼴의 넓이: ", makeAreaOfTrapezoid(10, 5, 12));
})();
