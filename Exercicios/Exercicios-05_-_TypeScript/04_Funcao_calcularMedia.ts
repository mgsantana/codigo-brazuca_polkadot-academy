function calcularMedia(numeros: number[]): number {
  const total = numeros.reduce((acc, numero) => acc + numero, 0);
  return total / numeros.length;
}

console.log(calcularMedia([10, 20, 30, 40]));
console.log(calcularMedia([-50, -30, -25, 15, 25.5, 30]));
