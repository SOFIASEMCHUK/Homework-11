const number = +prompt('The length of the array');
let array = [];

for (let i = 0; i < number; i++) {
    array[i] = prompt(`Enter ${number} values for your array (one at a time)`);
}
console.log(array);

function compareNumbers(a, b) {
    return a - b;
}

console.log(array.sort(compareNumbers)) ;

const spliced = array.splice(1, 3);
console.log(spliced);

console.log(array);
