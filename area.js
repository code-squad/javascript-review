const getCircle = function (...theArgs) {
    if (theArgs.length !== 1) {
        return "1개의 인자가 필요합니다";
    }
    let radius = theArgs[0];

    return Math.PI * radius * radius;
}
const getSquare = function (...theArgs) {
    if (theArgs.length !== 2) {
        return "2개의 인자가 필요합니다";
    }
    let [width, height] = theArgs;

    return width * height;
}
const getTrapezoid = function (...theArgs) {
    if (theArgs.length !== 3) {
        return "3개의 인자가 필요합니다";
    }
    let [base, upper, height] = theArgs;

    return ((base + upper) / 2) * height;
}