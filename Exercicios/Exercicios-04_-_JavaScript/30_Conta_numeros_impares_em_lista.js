function contaImpares(lista) {
  let contagem = 0;
  lista.forEach(num => {
	if (num % 2 !== 0) {
	  contagem++;
	}
  });
  return contagem;
}

let listNums = [5, 8, 23, 38, 17, 54, 62, 75];
console.log("Quantidade de números ímpares na lista: " + contaImpares(listNums));
