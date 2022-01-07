//for aninhado
//array multimencional
//switch case

/*loopingExterno(i++){
    //uma variavel criada externamente ainda existe internamente
    loopingInterno(j++){

    }
}*/

//O FOR DE FORA SÓ INCREMENTA QUANDO O DE DENTRO FINALIZAR

const arrayExterno = [];
for(let i = 0; i < 3; i++){
    arrayExterno[i] = [];
    for(let j = 0; j < 2; j++){
        arrayExterno[i][j] = j + 1;
        //console.log(i +": "+ j);
    }
}
console.table(arrayExterno);


//nomeArray[posicao] = "valor";

//i[0] = 0 j[0] = 0