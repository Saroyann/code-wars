let squareDigits = function(num) {
    return parseInt(num.toString().split('').map(digit => Math.pow(parseInt(digit), 2)).join(''), 10);
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
