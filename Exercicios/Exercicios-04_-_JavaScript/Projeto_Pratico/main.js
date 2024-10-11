let contaTransacoes = 0;
let timerLigado = false;
let historico = [];
let tempoRestante = 120; // 120 segundos

document.getElementById("calcular").addEventListener("click", function () {
  // Captura os valores inseridos pelo usuário
  let valorTransacao = parseFloat(document.getElementById("valor-transacao").value);
  let complexidade = document.getElementById("complexidade").value;
  let precoGas;
  let moedaFiat = document.getElementById("moedaFiat").value;
  let fatorFiat;
  let simbolo;

  // Definição de preço do gas por complexidade
  switch (complexidade) {
  case "baixa":
	precoGas = 0.01;
	break;
  case "media":
	precoGas = 0.05;
	break;
  case "alta":
	precoGas = 0.1;
	break;
  }

// Definição do fator de conversão em moeda fiat.
  switch (moedaFiat) {
  case "usd":
	fatorFiat = 4.19;
	simbolo = "$";
	break;
  case "eur":
	fatorFiat = 3.82;
	simbolo = "€";
	break;
  case "brl":
	fatorFiat = 22.87;
	simbolo = "R$";
	break;
  }

  // Calcula o custo total do gas
  let custoGas = valorTransacao * precoGas;
  let custoFiat = custoGas * fatorFiat; 

  // Valida o valor digitado para transação
  if (!valorTransacao || valorTransacao <= 0 || isNaN(valorTransacao)) {
    document.getElementById("resultado").innerHTML =
      '<p style="color:red; margin-left: 1em; margin-right: 1em;">Por favor, insira um valor maior que 0</p >';
  } else {
	// Exibe o resultado
	document.getElementById("resultado").innerHTML = `
      <p>Complexidade: <b>${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</b></p>
      <p>Valor da Transação: <b>${valorTransacao} DOT</b></p>
      <p>Custo estimado do Gas: <b>${custoGas.toFixed(2)} DOT</b></p>
      <p style="margin-left: 1em; margin-right: 1em;">Custo estimado em Fiat (${moedaFiat.toUpperCase()}):
      <b>${simbolo} ${custoFiat.toFixed(2)}</b></p>
      `;
	// Incrementa o contador de simulações
	contaTransacoes++;
	document.getElementById("contagem").innerText = contaTransacoes;
  
	if (!timerLigado) {
      timerLigado = true;
	  iniciaCronometro();
	  document.getElementById("alerta").innerHTML = `
    <p>Após 2 min, o histórico de transações será apagado!</p>`;
	}
  
	// Define array para guardas valores no historico
	historico.push( {
      valor: valorTransacao,
      complex: complexidade.charAt(0).toUpperCase() + complexidade.slice(1),
      custoGas: custoGas.toFixed(2),
      custoFiat: custoFiat.toFixed(2),
      moedaFiat: moedaFiat.toUpperCase()
	});
	atualizaHistorico();
  }
});

// Função para atualização de valores do histório e exibição em html
function atualizaHistorico() {
  let listaRegistros = document.getElementById("transacoes");
  listaRegistros.innerHTML = "";

  historico.forEach(transacao => {
    let registro = document.createElement("li");
    registro.innerHTML = `
       <b>${transacao.valor} DOT</b>, Complex: <b>${transacao.complex}</b>, Gas:
       <b>${transacao.custoGas} DOT</b> (${transacao.custoFiat} ${transacao.moedaFiat})`;
    listaRegistros.prepend(registro);
  });
}

// Função para iniciar o cronômetro regressivo
function iniciaCronometro() {
  let cronometro = setInterval(function () {
	let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;
	
    // Formata os segundos para sempre exibir dois dígitos
    segundos = segundos < 10 ? "0" + segundos : segundos;
	
    // Atualiza o cronômetro na página
    document.getElementById("cronometro").innerText = `${minutos}:${segundos}`;
	
    if (tempoRestante <= 0) {
      clearInterval(cronometro); // Para o cronômetro quando chegar a zero
      zeraContagem(); // Zera o histórico
      timerLigado = false;
      tempoRestante = 60; // Reinicia o tempo para 60 segundos
    }
	
    tempoRestante--; // Diminui 1 segundo a cada iteração
  }, 1000);
}

// Função que zera o histórico e a contagem
function zeraContagem() {
  if (contaTransacoes >= 1) {
    alert("Tempo da sessão esgotado, o histórico de transações será apagado!");
	contaTransacoes = 0;
	timerLigado = false;
	document.getElementById("contagem").innerText = contaTransacoes;
	document.getElementById("resultado").innerText = "";
	document.getElementById("transacoes").innerText = "";
	document.getElementById("alerta").innerText = "";
	historico = [];
    tempoRestante = 60; // Reinicia o cronômetro para 60 segundos
    document.getElementById("cronometro").innerText = "02:00"; // Reinicia a exibição do cronômetro
  }
}
