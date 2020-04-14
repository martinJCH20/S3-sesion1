var example = (parameters) =>{
    console.log(parameters);
}

example('Mensagge');

//MAP
let fish = ['piraña','barracuda','cod','del'];

let printfish =fish.map((individualfish) => {
    console.log(individualfish)
})
printfish;

let plurafish = fish.map((individualfish) => {
    console.log(`${individualfish}s`)
})
plurafish;

//FILTER
let seaCreatures = ['shark', 'while','squid','starfish', 'narwhal'];

let filteredList = seaCreatures.filter(creature => {
    console.log('filteredlist', creature[0] === 's');
    return creature[0] === 's';
});
filteredList;

console.log('filteredlist', filteredList);

//REDUCE
let number = [42,23,16,15,4,8];

let sum = number.reduce((a,b) => {
    return a + b;
},0)
console.log(sum);

//FIND
// const isCephalogod = (cephalogod) => {
//     return ['currentfish', 'octopus'].includes(cephalogod);
// }
// console.log('isCephalogod', isCephalogod(cephalogod));
// seaCreatures.find(isCephalogod);

// console.log(seaCreatures.find(isCephalogod));

//FINDEX
const isCephalogod = cephalogod => {
    return ['cuttlefish', 'octopus'].includes();
}
seaCreatures.findIndex(isCephalogod);

console.log(seaCreatures.findIndex(isCephalogod));

const isThereAn = (eel) => {
    return ['eel'].includes(eel);
}
console.log(seaCreatures.findIndex(isThereAn));