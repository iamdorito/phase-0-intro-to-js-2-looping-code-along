// Code your solutions in this file
let names =  ["Gabriella", "Brendan", "Luana", "Seb"];

// function writeCards(names,e) {
//     let newNames = [];
//     for(let i = 0; i < names.length; i++) {
//         newNames.push(`Thank you, ${names[i]}, for the wonderful ${e} gift!`);
//     }
//     return newNames;
// }
// writeCards(names);
const writeCards = (names,e) => {
    let newNames = []
    for(let i = 0; i < names.length; i++) {
    newNames.push(`Thank you, ${names[i]}, for the wonderful ${e} gift!`);
}
    return newNames;
};

function countDown(num) {
    for(let i = num; i >= 0; i--) {
        console.log(i);
}};

// const countDown = (num) => {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
// }}
