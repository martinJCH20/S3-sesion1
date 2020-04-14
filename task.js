//Ejercicio 1
let paises = [
    'Perú','Australia','Dinamarca','España'
]

paises.forEach((task) => {
    console.log(task);
})

//Ejercicio 2
let mapPaises = paises.map((pais) => {
    return ('País: '+ pais );
})
console.log(mapPaises);

//Ejercicio 3
let shortNamesPais = paises.filter((pais) => {
    return pais.length <= 6;
 })
 console.log(shortNamesPais);

 //Ejercicio 4
 let allpais = paises.reduce((all, pais) => 
    (all += ' ' + pais)
);
console.log(allpais);