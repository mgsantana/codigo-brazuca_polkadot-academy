function testPalindromo(string) {
  let revertString = string.split("").reverse().join("");
  if (string == revertString) {
	console.log("A string \"" + string + "\" é palíndromo.");
  } else {
	console.log("A string \"" + string + "\" não é palíndromo.");
  }
}

testPalindromo("ARARA");
