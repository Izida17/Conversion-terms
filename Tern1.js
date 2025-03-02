let a = Math.floor(Math.random() * 100);

let resultIfElse;
if ((a > 10 ? a : a * 2) > 5) {
    resultIfElse = (2 * a) + 1;
} else {
    if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
        resultIfElse = 5;
    } else {
        if (a % 2 == 0) {
            resultIfElse = 6;
        } else {
            resultIfElse = 7;
        }
    }
}
console.log(`a = ${a}`);
console.log(`Result (if...else): ${resultIfElse}`);

let resultSwitch;
if ((a > 10 ? a : a * 2) > 5) {
    resultSwitch = (2 * a) + 1;
} else {
    if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
        resultSwitch = 5;
    } else {
        switch (a % 2) {
            case 0:
                resultSwitch = 6;
                break;
            case 1:
                resultSwitch = 7;
                break;
            default:
                console.log("Error! Unexpected value a % 2");
                resultSwitch = null;
                break;
        }
    }
}
console.log(`Result (switch): ${resultSwitch}`);