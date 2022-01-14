/**
 * variaveis
 * parametros
 * funções
 * 
 * função chamando função
 * 
 * interação sobre string
 * array c/ string
*/

// =>Parametro: informação que vem de fora da função e é necessário dentro da função
// =>Variavel: nome/apelido que guarda informação no meu programa/memória

function nomeDaFuncao(parametro){
    //criar as linhas de instruções
    //=> todo passo a passo de execução em código
}

//--------------------------------------------------------------------------//

/** Criar uma função que some dois números*/
/** Criar um função que multiplique dois números sem usar o símbolo x */

function soma(num1, num2){
    let adicao;

    adicao = num1 + num2;

    return adicao;
}

soma(2,3);

function multiplicar(num1, num2){
    //multiplicao = Um número mais ele mesmo n vezes
    //multiplicao = 2*3 || 3*2 = 2+2

    let multi = 0;

    //preciso que seja executado n vezes => looping

    for(let i = 1; i <= num2; i++){
        multi = soma(num1, multi);
    }

    return multi;
}

/** Criar uma função que receba uma string e retorne ela escrita ao contrário */

/** Palavra de exemplo: DUVIDAS
 * 1 - Função recebe uma parametro do tipo string
 * 2 - Criar uma variavel para armazenar as letras
 * 3 - Acessar cada uma das letras da palavra
 * 4 - Ler a palavra começando pela última
 * 5 - Return com a escrita ao contrário
 */

// DUVIDAS
function palavraInvertida(palavra){
    let novaPalavra = '';

    for(let i = palavra.length - 1; i >= 0; i--){
        novaPalavra += palavra[i];
    }

    return novaPalavra;
}

palavraInvertida('duvidas');

//.push

const arrPalavras = [];

arrPalavras.push('Isabella'); //insere no final do array
arrPalavras[1] = 'Nicole';

//.pop
arrPalavras.pop();
//.shift
arrPalavras.shift();

//receber um array de numeros e inserir os pares dentro de outro
const numeros = [2,4,9,3,5,11,14];

function insereElementos(arrElementos){
    const arrPares = [];
    for(let i = 0; i < arrElementos.length; i++){
        if(arrElementos[i] % 2 === 0){
            arrPares.push(arrElementos[i]);
        }
    }

    return arrPares;
}

insereElementos(numeros);
