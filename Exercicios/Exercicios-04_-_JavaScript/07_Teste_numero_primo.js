function ehPrimo(num) {
  // Testa se o número é maior que 1
  if (num <= 1)
	return false;
  // Testa números no intervalo de 2 até (num - 1)
  for (let i = 2; i < num; i++)
    if (num % i == 0)
      return false;
  
  // Retorna verdadeiro se passar nos testes anteriore 
  return true;
}

const num = 17;
console.log("O número " + num + (ehPrimo(num) ? " é primo" : " não é primo")); // Testa se o número é primo e retorna "true" ou "false".
