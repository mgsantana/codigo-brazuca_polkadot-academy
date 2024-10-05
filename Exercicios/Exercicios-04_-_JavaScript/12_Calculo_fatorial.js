// Função para cáculo do fatorial de um número
function calc_fatorial(num) {
  let fatorial = 1;
  if (num === 0)
	return 1;
  for (let i = num; i >= 1; i--)
	fatorial *= i;
  return fatorial;
}

const num = 10;
console.log("O fatorial do número " + num + " é: " + calc_fatorial(num));
