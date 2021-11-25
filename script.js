// mudar cor de fundo da tarefa ao clicar
function selectItem(event) {
  const arrElementoSelected = document.getElementsByClassName('selected');
  if (arrElementoSelected.length > 0) {
    arrElementoSelected[0].classList.remove('selected');
  }
  event.target.classList.toggle('selected');
}

// marcar como completa
function marcarComoCompleta(event) {
  event.target.classList.toggle('completed');
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
    item.addEventListener('dblclick', marcarComoCompleta);
    elementoOl.appendChild(item);
    input.value = '';
  }
}
botaoAdicionar.addEventListener('click', imprimindoLista);

// apagar toda a lista
const botaoApagar = document.getElementById('apaga-tudo');
function apagar() {
  while (elementoOl.firstChild) {
    elementoOl.removeChild(elementoOl.firstChild);
  }
}
botaoApagar.addEventListener('click', apagar);
