function descendingOrder(n) {
const digits = [];

let num = n;

while (num > 0) {
const digit = num % 10;
digits.push(digit);
num = Math.floor(num / 10);
}

for (let i = 0 ; i < digits.length ; i++) {
    for (let j = i + 1; j < digits.length ; j++) {
        if (digits[i] < digits[j]) {
            const temp = digits[i];
            digits[i] = digits[j];
            digits[j] = temp;
        }
    }
}

let result = 0;
for (let i = 0; i < digits.length ; i++) {
    result = result * 10 + digits[i];
}

return result;
}