let vogais = ["a", "e", "i", "o", "u"];
function contaVogais(string) {
  let soma = 0;
  for (let i = 0; i < 5; i++)
	soma += string.toLowerCase().split(vogais[i]).length - 1;
  return soma;
}

let stringExemplo = "Teste dE cOntAgem de vOgais";
console.log("A string tem " + contaVogais(stringExemplo) + " vogais");
