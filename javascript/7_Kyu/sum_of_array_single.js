function repeats(arr) {
    const occurrences = {};

    arr.forEach(num => {
        if (occurrences[num]) {
            occurrences[num]++;
        } else {
            occurrences[num] = 1;
        }
    });

    let sum = 0;
    for (const num in occurrences) {
        if (occurrences[num] === 1) {
            sum += parseInt(num, 10);
        }
    }

    return sum;
}

