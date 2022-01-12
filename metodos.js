//metodos de array
/**
 * INCLUDES
 * FILTER
 * INDEXOF
 * FIND
 * CONCAT
 * SORT
 * -----------------------------
 * LENGTH
 * POP
 * SPLICE
 * PUSH
 * UNSHIFT
 * ----------------------------
 */

const str = 'Texto para o includes encontrar a palavra';

console.log(str.includes('includes'));

const numbersArr = [1,2,3,4];

console.log(numbersArr.includes(5));


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);

/*function wordsReturn(word){
    return word.length > 6;
}

let wordsReturn = (word) => {
    return word.length > 6;
}*/

console.log(words.indexOf('present'));

const arrNumbers = [1,2,34,5,1,26,55];

const number = arrNumbers.find(element => element > 10);
console.log(number);



const orderNumbers = [1,3,2,6,7,4,9];
console.log(orderNumbers.sort());

const numeros = orderNumbers.sort(function(a,b){
    return a - b;
});

console.log(numeros);