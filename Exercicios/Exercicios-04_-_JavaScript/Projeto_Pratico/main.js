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

// Define o fator de conversão em moeda fiat.
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
  if (valorTransacao <= 0 || isNaN(valorTransacao)) {
    document.getElementById("resultado").innerHTML =
      '<p style="color:red;">Por favor, insira um valor de transação válido.</p >';
    return;
  }
  // Exibe o resultado
  document.getElementById("resultado").innerHTML = `
      <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
      <p>Valor da Transação: ${valorTransacao} DOT</p>
      <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
      <p><strong>Custo Estimado em Fiat (${moedaFiat.toUpperCase()}): ${simbolo} ${custoFiat.toFixed(2)}</strong></p>
      `;
});

