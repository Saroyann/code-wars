let getCount = function (str) {
    const vocal = ['a','i','u','e','o'];
    let vocRes = 0;

    for (let char of str ) {
        if(vocal.includes(char)) {
            vocRes++;
        }
    }
    return vocRes;
}

console.log(getCount('abracadabra'));