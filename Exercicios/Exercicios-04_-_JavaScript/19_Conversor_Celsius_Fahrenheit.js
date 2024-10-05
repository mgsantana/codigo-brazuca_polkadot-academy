function convertTemp(temp) {
  const fahrenheit = (temp * 9 / 5) + 32;
  return fahrenheit;
}

const celsius = 28;
console.log("A temperatura de " + celsius + "°C " + "equivale a " + convertTemp(celsius) + "°F");
