/** SELETORES
 * Tag 
 * ID
 * CLASS - CLASSE
 */

let li = document.getElementById('item1'); // Seleciona APENAS o elemento com aquele ID

let div = document.getElementsByClassName('box-noticias'); // Seleciona TODOS os elementos com aquela class

let ul = document.getElementsByTagName('ul') // Seleciona TODOS os elementos com aquela tag

li.innerText = 'Teste li';

li.classList.add('class-teste-cor');
console.log(li);