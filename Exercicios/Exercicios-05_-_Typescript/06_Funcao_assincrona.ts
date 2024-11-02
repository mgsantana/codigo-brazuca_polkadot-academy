function buscarDados(): Promise<string> {
  const tempoResposta = Math.floor(Math.random() * 5000) + 1000; // Tempo varia entre 1 e 6 seg
  return new Promise(resolve => {
	setTimeout(() => resolve("Dados carregados!"), tempoResposta);
  });
}

async function exibirDados() {
  const dados = await buscarDados();
  console.log(dados);
}

exibirDados(); // 1a chamada
exibirDados(); // 2a chamada
exibirDados(); // 3a chamada
