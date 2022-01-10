//OBJETO -> definito por um coleção de propriedade, onde
//cada propriedade tem sintaxe de chave:valor

//CHAVE = pode ser string
//VALOR = pode ser qualquer informação (string, number, boolean)

//COMO CRIA???

const nomeObjeto = {};

const person = {
    firstName: "Isabella",
    lastName: "Bertini",
    age: 27
}

person.extra = "Instrutora";
console.log(person);

//console.log(person.age);
//console.log(person.lastName);
//console.log(person.firstName);

const estoque = [
    {
        nomeProduto: "Mouse",
        quantidade: 3,
        cor: ["vermelho", "preto", "azul"],
        marca:'',
        tipo: ''
    },
    {
        nomeProduto: "Teclado",
        quantidade: 4,
        cor: "preto"
    },
    {
        nomeProduto: "Monitor",
        quantidade: 1,
        cor: "cinza"
    },
];

//console.log(estoque[0].nomeProduto);

for(let i = 0; i < estoque.length; i++){
    //console.log(estoque[i].nomeProduto);

    if(estoque[i].quantidade < 2){
        console.log(estoque[i].nomeProduto);
    }
}