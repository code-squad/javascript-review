const calculateCircle = function (...theArgs) {
    if (theArgs.length === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    if (theArgs.length !== 1) {
        return "1개의 인자가 필요합니다";
    }
    for (let i = 0, len = theArgs.length; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    if (theArgs[0] < 0)
        return "반지름은 0보다 커야 합니다";
    let radius = theArgs[0];

    return Math.PI * radius * radius;
}
const calculateRect = function (...theArgs) {
    if (theArgs.length === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    if (theArgs.length !== 2) {
        return "2개의 인자가 필요합니다";
    }
    for (let i = 0, len = theArgs.length; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    if (theArgs[0] < 0)
        return "밑변은 0보다 커야 합니다";
    if (theArgs[1] < 0)
        return "높이는 0보다 커야 합니다";
    let [width, height] = theArgs;

    return width * height;
}
const calculateTrapezoid = function (...theArgs) {
    if (theArgs.length === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    if (theArgs.length !== 3) {
        return "3개의 인자가 필요합니다";
    }
    for (let i = 0, len = theArgs.length; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    if (theArgs[0] < 0)
        return "밑변은 0보다 커야 합니다";
    if (theArgs[1] < 0)
        return "윗변은 0보다 커야 합니다";
    if (theArgs[2] < 0)
        return "높이는 0보다 커야 합니다";
    let [base, upper, height] = theArgs;

    return ((base + upper) / 2) * height;
}
const getArea = function (...theArgs) {
    let name = theArgs.shift();
    switch (name) {
        case "circle":
            let len = theArgs.length;
            if (len === 1)
                console.log(calculateCircle(theArgs[0]));
            else if (len === 2) {
                for (let i = theArgs[0], count = theArgs[1]; i <= count; i++)
                    console.log(calculateCircle(i));
            }
            break;
        case "rect":
            console.log(calculateRect(theArgs[0], theArgs[1]));
            break;
        case "trapezoid":
            console.log(calculateTrapezoid(theArgs[0], theArgs[1], theArgs[2]));
            break;
        default:
            console.log("Sorry, we are out of " + name + ".");
    }

}
// getArea('circle', 10);
// getArea('rect', 10, 15);
// getArea('trapezoid', 10, 15, 12);
getArea('circle', 1, 100);