let char = "e";
let stringExemplo = "FrAse de exEmplo parA contagEm de cAractEre";
let contagem = 0;
function contChar(string) {
  contagem = string.toLowerCase().split(char).length - 1;
  return contagem;
}

console.log("O caractere \"" + char + "\" aparece " + contChar(stringExemplo) + " vezes na string.");
