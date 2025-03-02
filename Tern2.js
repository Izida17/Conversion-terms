function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let resultIfElse;
    if (a > 10) {
        resultIfElse = 'a is bigger than 10';
    } else {
        resultIfElse = 'a is less than or equal to 10 ';
        if (a === 5) {
            resultIfElse += 'an example of a special case';
        }
    }
    if (a === 15) {
        resultIfElse += 'but a is not 15';
    }
    if (a > 5) {
        resultIfElse += 'and a is greater than 5';
    } else {
        resultIfElse += 'and a is less than or equal to 5 ';
    }
    if (a % 2) {
        resultIfElse += ' and a is odd';
    } else {
        resultIfElse += ' and a is even ';
    }
    console.log(`Result (if...else): ${resultIfElse}`);

    let resultSwitch = "";
    if (a > 10) {
        resultSwitch = 'a is bigger than 10';
    } else {
        resultSwitch = 'a is less than or equal to 10 ';
        switch (a) {
            case 5:
                resultSwitch += 'an example of a special case';
                break;
        }
    }
    switch (a) {
        case 15:
            resultSwitch += 'but a is not 15';
            break;
    }
    if (a > 5) {
        resultSwitch += 'and a is greater than 5';
    } else {
        resultSwitch += 'and a is less than or equal to 5 ';
    }
    switch (a % 2) {
        case 0:
            resultSwitch += ' and a is even ';
            break;
        case 1:
            resultSwitch += ' and a is odd';
            break;
    }
    console.log(`Result (switch): ${resultSwitch}`);
}
manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()