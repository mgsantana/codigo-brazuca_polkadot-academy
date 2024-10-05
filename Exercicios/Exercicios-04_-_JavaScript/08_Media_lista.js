function mediaLista(list) {
  let soma = 0;
  let i = 0;
  while (i < list.length) {
	soma += list[i];
	i++;
  }
  return soma / list.length;
}

const listNum = [2, 7, 12, 6, 17, 45];
console.log(mediaLista(listNum));
