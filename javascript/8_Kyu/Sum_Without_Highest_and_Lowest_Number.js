let sumArray = function(array) {
    
if (array == null) {
    return 0;
}
else if(array.length <= 2 ) {
    return 0;
} 
else {
array = array.sort(function(a,b) {return a - b});

let total = 0;
for (let i = 1; i < array.length - 1 ; i++) {
    total += array[i];
}

return total;
}
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3,5]));
console.log(sumArray([6,2,1,8,10]));
console.log(sumArray([0,1,6,10,10]));
console.log(sumArray([-6,-20,-1,-10,-12]));
console.log(sumArray([-6,20,-1,10,-12]));

