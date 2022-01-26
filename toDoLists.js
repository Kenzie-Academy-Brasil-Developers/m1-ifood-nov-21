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

//FUNÇÃO QUE CRIA O ITEM NA LISTA
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

//FUNÇÃO QUE IDENTIFICA O FILHO CLICADO DA LISTA
function identificaItem(event){
    const itemClick = event.target;

    if(itemClick.tagName === 'SPAN'){
        removeItem(itemClick);
    }
    if(itemClick.tagName === 'INPUT'){
        checked(itemClick);
    }
}

//FUNÇÃO QUE REMOVE O ITEM CLICADO DA LISTA
function removeItem(span){
   span.parentElement.remove();

}

//FUNÇÃO DE CHECKED
function checked(input){
    input.parentNode.classList.toggle("feito");
}


buttonAdd.addEventListener('click', newItem);

allList.addEventListener('click', identificaItem);


//function checkItem(){}

//CAPTURING = Do pai para os filhos
//BUBBLING = Sai dos filhos para os pais e assim para os pais desses


