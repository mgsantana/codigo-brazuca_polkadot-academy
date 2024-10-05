function checkMultipl(num1, num2) {
  if (num1 % num2 == 0) {
	console.log("O número " + num1 + " é múltiplo de " + num2);
  } else {
	if (num2 % num1 == 0) {
	  console.log("O número " + num2 + " é múltiplo de " + num1);
	} else {
	  console.log("Os números não são múltiplos um do outro.");
	}
  }
}

checkMultipl(5, 35);
