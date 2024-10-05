function ordenaLista(lista) {
  const listaOrdenada = lista.sort((a, b) => (a - b));
  return listaOrdenada;
}

const lista = [45, 23, 9, 12, 7, 65, 24];
console.log("Lista em ordem crescente: " + ordenaLista(lista));
