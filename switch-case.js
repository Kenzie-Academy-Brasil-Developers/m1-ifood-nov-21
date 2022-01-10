//IF/ELSE -> executar algo pra que seja validado
//- realizar alguma conta aritmetica
//- comparar valores

//SWITCH-CASE

/*
switch(parametro-de-entrada){
    case caso-1:
        //execução;
        break;
    case caso-2:
        //execução
        break;
    default:
        //execução;
}


if(){
    //


    //

    //
}*/

let autenticado = true;

switch(autenticado){
    case true:
        console.log("Usuário logado");
        break;
    default:
        console.log("Usuário deslogado");
}

let month = 3;
let monthName;

switch(month){
    case 1:
        monthName = "Janeiro";
        break;
    case 2:
        monthName = "Fevereiro";
    break;
    case 3:
        monthName = "Março";
    break;
    case 4:
        monthName = "Abril";
    break;
    case 5:
        monthName = "Maio";
    break;
    case 6:
        monthName = "Junho";
    break;
    default:
        monthName = "Mês inválido"
}

console.log(monthName);

function estacoesDoAno(mes){
    switch(mes){
        case "Janeiro":
        case "Fevereiro":
        case "Março":
            console.log("Verão");
        break;
    
        case "Abril":
        case "Maio": 
        case "Junho":
            console.log("Outono");
        break;
    
        case "Julho":
        case "Agosto":
        case "Setembro":
            console.log("Inverno");
        break;
    
        case "Outubro":
        case "Novembro":
        case "Dezembro":
            console.log("Primavera");
        break;
    
        default:
            console.log("Dado inválido");
    }
}
