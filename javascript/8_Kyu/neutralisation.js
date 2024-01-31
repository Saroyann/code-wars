let neutralise = function (str1, str2) {
    let result = '';
    for (let i = 0 ; i < str1.length ; i++) {
        const char1 = str1[i];
        const char2 = str2[i];

        if(char1 === "+" && char2 === "+") {
            result += "+";
        } else if(char1 === "-" && char2 === "-") {
            result += "-"; 
        } else {
            result += 0;
        }
    }
    return result;
}

console.log(neutralise("--++--", "++--++"));
console.log(neutralise("-+-+-+", "-+-+-+"));
console.log(neutralise("-++-", "-+-+"));
console.log(neutralise("--++", "++++"));
console.log(neutralise("+++--+---", "++----++-"));
console.log(neutralise("-----", "-----"));
console.log(neutralise("-+", "++"));
console.log(neutralise("++-++--++-", "-+++-++-++"));
console.log(neutralise("-++-+-++-", "+-++++---"));
console.log(neutralise("---++-+--", "-+++--++-"));
console.log(neutralise("+-----+++-", "--+-+-++--"));
console.log(neutralise("+-----+-", "---++-++"));
console.log(neutralise("-+--+-+---", "-+--+-+-+-"));
console.log(neutralise("+-+", "-++"));
console.log(neutralise("-++", "-+-"));
console.log(neutralise("---+", "-+++"));
console.log(neutralise("+--", "+--"));
console.log(neutralise("--+++-+-", "+++++---"));
