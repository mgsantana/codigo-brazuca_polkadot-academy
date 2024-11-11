function reverterArray<T>(items: T[]): T[] {
  return [...items].reverse();
}

const array01 = [1, "a", 12, "B", 3, "l"];
const array02 = ["a", 4, "b", 7, "c", "Z", 25];
console.log("O inverso de ", array01, "é:", reverterArray(array01));
console.log("O inverso de ", array02, "é:", reverterArray(array02));

const apenasNumeros = reverterArray(array01.filter(item => typeof item === "number"));
console.log("Inverso de", array01, "filtrado por números: ", apenasNumeros);

const apenasStrings = reverterArray(array02.filter(item => typeof item === "string"));
console.log("Inverso de", array02, "filtrado por strings: ", apenasStrings);
