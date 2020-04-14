let superHeroesArray = ['Iron man', 'Captain America', 'Black widow', 'Thor', 'Hulk'];

let avengers = superHeroesArray.map((superHero) => {
    return (superHero += ' Avengers');
})

console.log(avengers);

let shortNamesAvengers = superHeroesArray.filter((superHero) => {
   return superHero.length < 5;
})
console.log(shortNamesAvengers);

let shortNameAvengers2 = superHeroesArray.find((superHero) =>
    superHero.length < 5 
)
console.log(shortNameAvengers2);

let findshortNameAvengers = superHeroesArray.findIndex((superHero) =>
    superHero.length < 5 
)
console.log(findshortNameAvengers);

let allavenger = superHeroesArray.reduce((all, hero) => 
    (all += ' ' + hero)
);
console.log(allavenger);

let isAllstr = superHeroesArray.every((hero) => typeof hero === 'string'); //que todo sea tenga el mismo tipo de dato, en este caso string
console.log(isAllstr);

let isSomestr = superHeroesArray.some((hero) => typeof hero === 'number'); //al menos que uno tengo el tipo de dato, en este caso se numero
console.log(isSomestr);