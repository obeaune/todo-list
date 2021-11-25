// mudar cor de fundo da tarefa ao clicar
const arrElementoSelected = document.getElementsByClassName('selected');
function selectItem(event) {
  if (arrElementoSelected.length > 0) {
    arrElementoSelected[0].classList.remove('selected');
  }
  event.target.classList.toggle('selected');
}
// imprimir o texto colocado no input em forma de lista ordenada
const botaoAdicionar = document.querySelector('#criar-tarefa');
const elementoOl = document.querySelector('#lista-tarefas');
const input = document.getElementById('texto-tarefa');
function imprimindoLista() {
  if (input.value !== '') {
    const item = document.createElement('li');
    item.innerHTML = input.value;
    item.addEventListener('click', selectItem);
    elementoOl.appendChild(item);
    input.value = '';
  }
}
botaoAdicionar.addEventListener('click', imprimindoLista);
