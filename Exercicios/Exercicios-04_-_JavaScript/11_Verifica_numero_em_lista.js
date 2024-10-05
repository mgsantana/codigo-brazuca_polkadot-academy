function verificaNum(num) {
  if (listaNum.includes(num)) {
	console.log("O número " + num + " está na lista");
  } else {
	console.log("O número " + num + " não está na lista");
  }
}
  
const listaNum = [1, 4, 5, 8, 12, 27];
verificaNum(5);
