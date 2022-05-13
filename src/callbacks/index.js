function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    debugger
    return callback(num1, num2);
}


console.log(calc(20, 2, sum));

function date(callback) {
    debugger
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);