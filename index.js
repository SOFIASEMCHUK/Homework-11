// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.



// const lengthMasive = +prompt('Enter amount number');
// const array = [lengthMasive];
// for(let i=0; i<lengthMasive; i++) {
//     const number = +prompt(`Enter number ${i}`)
//     array[i] = number;
// }
// console.log(array);




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
