// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.


const number = String(prompt('Enter random number'));
const numLength = number.length;
const array = [numLength];
for(let i=0; i<numLength; i++){
    array[i] = number[i];
}
console.log(array);

function sortUp(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
console.log(array.sort(sortUp)) ;

const spliced = array.splice(1, 3);
console.log(spliced);

console.log(array);
