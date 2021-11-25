// imprimir o texto colocado no input em forma de lista ordenada
const botaoAdicionar = document.querySelector('#criar-tarefa');
const idElementoOl = document.querySelector('#lista-tarefas');
const input = document.getElementById('texto-tarefa');
function imprimindoLista() {
  if (input.value !== '') {
    const item = document.createElement('li');
    item.innerHTML = input.value;
    idElementoOl.appendChild(item);
    input.value = '';
  }
}
botaoAdicionar.addEventListener('click', imprimindoLista);
