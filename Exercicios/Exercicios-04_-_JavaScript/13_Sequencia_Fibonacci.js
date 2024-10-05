// Função para geração da sequência de Fibonacci
function seqFibo(num) {
  let fibo = [0, 1];
  for (let i = 2; i < num; i++) {
	fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log("Sequência de Fibonacci até o décimo termo: " + seqFibo(10));
