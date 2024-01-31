function evenOrOdd(number) {
    let res = number % 2 == 0 ? 'Even' : 'Odd';
    return res;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));
