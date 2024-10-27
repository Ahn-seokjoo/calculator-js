// macOS : Shift(⇧) + Option(⌥) + F

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    var result = calculateWithStirng(line);
    console.log("result: ", result);
    rl.close();
});

rl.on("close", () => {
    process.exit();
});

function calculateWithStirng(string) {
    var splitedExpression = splitExpression(string);
    var replacedExpression = splitedExpression.map(item => {
        const converted = Number(item);
        return isNaN(converted) ? item : converted;
    });
    return calculate(replacedExpression);
}

function calculate(replacedExpression) {
    var result = replacedExpression[0];
    for (let i = 1; i < replacedExpression.length; i++) {
        var text = replacedExpression[i];
        var numberdValue = Number(text);
        if (isNaN(text)) { // 사칙연산인 경우
            if (text == '+') result = sum(result, Number(replacedExpression[++i]));
            if (text == '-') result = sub(result, Number(replacedExpression[++i]));
            if (text == '*') result = multiply(result, Number(replacedExpression[++i]));
            if (text == '/') result = divide(result, Number(replacedExpression[++i]));
        } else {
            continue;
        }
    }
    return result;
}

function splitExpression(string) {
    return string.match(/\d+|[+\-*/]/g);
}

function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}