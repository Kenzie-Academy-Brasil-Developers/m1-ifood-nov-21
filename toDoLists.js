/********TO DO LIST *****/
/*
1. criar uma lista de compras de forma dinamica - Função de criar item
2. armazenar os itens da lista - armazenar em um Array
3. QUANDO checkar o item, mudar o css (adicionar um risco no texto) - Função de check
4. Poder excluir o item da lista - Função de excluir
*/

const toDoList = [];
const allList = document.getElementById('allList');
const buttonAdd = document.getElementById('add');

function newItem(){
    const valueList = document.getElementById('valueList');

    const itemLista = document.createElement("li");
    const itemInput = document.createElement("input");
    itemInput.type = "checkbox";
    const itemLabel = document.createElement("label");
    const itemSpan = document.createElement("span");
    itemSpan.innerText = "x";

    const nameValue = valueList.value;
    itemLabel.innerText = nameValue;

    itemLista.appendChild(itemInput);
    itemLista.appendChild(itemLabel);
    itemLista.appendChild(itemSpan);

    allList.appendChild(itemLista);

    toDoList.push(nameValue);
}

buttonAdd.addEventListener('click', newItem);

//function checkItem(){}

//function removeItem(){}