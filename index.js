const number = prompt('Enter random number');
let array = Array(number.length);

for (let i=0; i<number.length; i++) {
    array[i] = number[i];
}
console.log(array);

function compareNumbers(a, b) {
    return a - b;
}
console.log(array.sort(compareNumbers)) ;

const spliced = array.splice(1, 3);
console.log(spliced);

console.log(array);
