// Função que retorna a string invertida
function invertString(string) {
  let inversa = "";
  for ( let i = string.length -1; i >= 0; i--) {
	inversa += string[i];
  }
  return inversa;
}

// Camando a função e apresentando a string invertida no console
console.log(invertString("String a ser invertida"));
