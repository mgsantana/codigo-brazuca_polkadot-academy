function somaDigitos(num) {
  let soma = 0;
  const digList = num.toString().split("");
  for (let i = 0; i < digList.length; i++) {
	soma += parseInt(digList[i]);
  }
  return soma;
}

const num = 361;
console.log("A soma dos dígitos do número " + num + " é: " + somaDigitos(num));
