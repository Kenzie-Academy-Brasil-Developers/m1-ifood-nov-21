const frutas = ["Banana", "Morango", "Laranja"];

//console.log(frutas);

frutas.push("Manga");

//console.log(frutas);
/*
frutas[0] = "Banana";
frutas[1] = "Morango";
frutas[2] = "Laranja";
*/

//console.log(frutas[1]);

let fruta1 = "Banana";
let fruta2 = "Morango";
let fruta3 = "Laranja";

for(let i = 0; i < frutas.length; i++){
    //console.log(frutas[i]);
}

//ACESSAR VALOR DO ARRAY => NOMEDOARRAY[indice]
//CRIE UM NOVO ARRAY SOMENTE COM NUMEROS PARES

const numeros = [1,2,3,4,5,6,7,8,9,10];

function numerosPares(numeros){
    const novosPares = [];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            novosPares.push(numeros[i]);
        }
    }
}

//console.log(novosPares);


//CRIE UM ARRAY APENAS COM NÚMEROS PARES CONTIDOS ENTRE 0 E 10
//INSERIR
const pares = [];
console.log(pares.length);
console.log(pares);

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        pares.push(i);
    }
}
//console.log(pares);

//EXCLUIR

pares.pop(); //ultimo
pares.shift(); // primeiro

//SLICE
const estados = ["RJ", "SP", "MG", "SC", "ES", "PE", "PA"];

console.log(estados);

let busca = estados.indexOf("ES");

estados.splice(busca, 1);

//estados.splice(estados.indexOf("ES"), 1);

console.log(estados);

