// Função para testar se um número é par ou ímpar
function testParImpar(num) {
  if (num % 2 == 0) {
	return ("O número " + num + " é par.");
  } else {
	return ("O número " + num + " é ímpar.");
  }
}

console.log(testParImpar(15));
