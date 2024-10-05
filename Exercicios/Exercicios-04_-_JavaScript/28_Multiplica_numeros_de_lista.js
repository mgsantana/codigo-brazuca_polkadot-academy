function multiplNums(lista) {
  let produto = 1;
  lista.forEach(num => {
	produto *= num;
  });
  return produto;
}

let listNums = [2, 7, 23, 8, 11, 35];
console.log("Resultado da multiplicação dos números da lista: " + multiplNums(listNums));
