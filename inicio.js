/*
aritmetica basica => adição, subtração, multiplicação, divisão

variaveis 

tipos de variaveis
condicional = IF/ELSE
comparadores

funções => é conjunto de instruções que podem ser utilizadas ao longo de todo
meu arquivo de js

repetição (looping) = FOR
estruturas de informações (arrays)
*/

/*------------------------------------------------------------*/

/*

+
-
* = multiplicação -> 2*3 = 2+2+2

/

^

% => divisão com resto -> 2/2 = resto 0

*/

const numero = 2; //number/float
let letras = 'abc'; //string 'abc' === 'Abc'

letras = 'svg';

/* let
const */

function escopo(){

}
/*

= : atribuir valor

== : comparo um valor '2' == 2
=== : identico 2 === 2

*/

/*

string => textos '' / ""
numero => numeros
booleano => true/false | verdadeiro/falso

*/

letras = 'xkv';


'abc' === 'sdaSDSA AASDFA asdfadrq aabc'


//Função que recebe dois números e retorna a soma entre eles

function somar(numero1, numero2){
    //instruções
    let total = numero1 + numero2;
    
    return total;
}

somar(2,3);

function multiplicar(num1, num2){
    let multiplica;

    multiplica = somar(num1,num2) * 2;

    if(multiplica > 100 && multiplica < 150){
        let subtrair = multiplica - 11;

        return subtrair;
    }else{
        return multiplica;
    }
}

multiplicar(3,2);

let number1 = 2;
let number2 = 3;

if(number1 < number2){
    console.log("ok");
}

/*
&& = true + true

|| = true + false || false + true

===
==

!=
!==

!
>
<
>=
<=
*/

if(77 % 5 === 0){
    console.log("Multiplo");
}else{
    console.log("Não multiplo");
}