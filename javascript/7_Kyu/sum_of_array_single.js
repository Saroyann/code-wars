function repeats(arr) {
    const occurrences = {};

    // Count occurrences of each number
    arr.forEach(num => {
        if (occurrences[num]) {
            occurrences[num]++;
        } else {
            occurrences[num] = 1;
        }
    });

    let sum = 0;

    // Sum numbers that occur only once
    for (const num in occurrences) {
        if (occurrences[num] === 1) {
            sum += parseInt(num, 10);
        }
    }

    return sum;
}