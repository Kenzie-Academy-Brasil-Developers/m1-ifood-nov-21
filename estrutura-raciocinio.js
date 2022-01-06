/**
 * DONA ANA TEM UMA BOLERIA E PRECISA ACRESCENTAR AOS BOLOS PRONTOS A COBERTURA CORRETA DE ACORDO COM 
 * O SABOR DA MASSA. 
 * BOLOS COM MASSA BRANCA COMBINAM COM COBERTURA DE BEIJINHO, JÁ OS BOLOS DE MASSA DE CHOCOLATE
 * COMBINAM COM COBERTURA DE BRIGADEIRO 
 */

// 0 - CRIAR UMA FUNÇÃO QUE RECEBA O TIPO DA MASSA (FUNÇAO RECEBENDO 1 PARAMETRO)
// 1 - VALIDAR QUAL O TIPO DA MASSA (IF COM O PARAMENTRO)
// 2 - VERIFICAR A COMBINAÇÃO DE MASSA + COBERTURA (RETORNO NO IF DE ACORDO COM A MASSA)
// 3 - RETORNAR QUAL A COBERTURA IDEAL

// TIPOS DE MASSA => BRANCA || CHOCOLATE
// BRANCA: cobertura -> beijinho
// CHOCOLATE: cobertura -> brigadeiro


function cobertura(massa){
    if(massa === "branca"){
        return console.log("Cobertura de beijinho");
    }else if(massa === "chocolate"){
        return console.log("Cobertura de brigadeiro");
    }else{
        return console.log("Tipo de massa invalida");
    }
}

// função que recebe um conjunto de numeros e multiplica os pares por 2, retornando um novo array
// 1- Função vai receber um array de numeros
// 2- Criar um looping pra acessar todos os numeros recebidos
// *** limite do for deve ser o tamanho total do array (nomedoarray.length)
// 3- Validar se o número é par
// 4- Se for par multiplicar por 2
// 5- retornar um novo array (conter os numeros normais e os multiplicados por 2)

const arrNumbers = [22,5,9,12,14,35,38,27,64];

function paresPorDois(numbers){
    let multiDois;
    const newArrNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            multiDois = numbers[i] * 2;
            newArrNumbers.push(multiDois);
            //newArrNumbers.push(numbers[i] * 2);
        }else{
            newArrNumbers.push(numbers[i]);
        }
    }

    console.log(newArrNumbers);

    return newArrNumbers;
}

paresPorDois([22,5,9,12,14,35,38,27,64]);
//mesma coisa que:
paresPorDois(arrNumbers);
