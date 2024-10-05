function somaPares(lista) {
  let soma = 0;
  lista.forEach(num => {
	if (num % 2 === 0) {
	  soma += num;
	}
  });
  return soma;
}

let listNums = [2, 8, 13, 18, 27, 64, 72, 85];
console.log("Soma dos números pares da lista: " + somaPares(listNums));
