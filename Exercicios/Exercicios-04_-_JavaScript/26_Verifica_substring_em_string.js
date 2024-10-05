function verifSubstr(substr, string) {
  return string.toLowerCase().includes(substr.toLowerCase());
} 

let substr = "ção";
let frase = "Frase de teste para verificaÇão da existência de uma substring";
console.log(verifSubstr(substr, frase) ? "A substring foi encontrada na frase" : "A substring não foi encontrada na frase");
