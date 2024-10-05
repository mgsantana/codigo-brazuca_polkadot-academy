function substVogais(string) {
  let novaString = string;
  for (let i = 0; i < 5; i++) {
	// Normaliza os carateres com acento, separando a vogal e o acento, procura por todos os acentos no intervalo
	// de caracteres unicode "u0300-u036f", em busca de sinais diacríticos, e os remove. Em seguida, substitui as
	// vogais por "*".
	novaString = novaString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[aeiou]/gi, "*");
  }
  return novaString;
}

let frase = "FrAse de ExemplO pAra sUbstItuiçÃo dE vOgaIs";
console.log(substVogais(frase));
