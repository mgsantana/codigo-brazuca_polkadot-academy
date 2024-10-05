function testaOrdem(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > lista[i + 1]) {
      return false;
    }
  }
  return true;
}

const listNums1 = [1, 5, 3, 12, 4, 25, 32];
const listNums2 = [1, 7, 12, 42, 57, 62, 75];

console.log(testaOrdem(listNums1));
console.log(testaOrdem(listNums2));
