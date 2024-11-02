function filtrarPrecosAltos(precos: number[], valorDeCorte: number = 100, modificador?: (preco: number) => number): number[] {
  const precosFiltrados = precos.filter(preco => preco > valorDeCorte);

  // Se o modificador for fornecido, aplica o mapeamento nos preços filtrados
  return modificador
	? precosFiltrados.map(preco => parseFloat(modificador(preco).toFixed(2)))
	: precosFiltrados.map(preco => parseFloat(preco.toFixed(2)));
}


console.log(filtrarPrecosAltos([50, 150, 200, 30])); // [150, 200]
console.log(filtrarPrecosAltos([50, 150, 200, 30], 180)); // [200]
console.log(filtrarPrecosAltos([50, 150, 200, 30], 100, preco => preco * 1.1)); // [165, 220] - aumento de 10%
console.log(filtrarPrecosAltos([50, 150, 200, 30], 50, preco => preco - 20)); // [130, 180] - desconto de 20
