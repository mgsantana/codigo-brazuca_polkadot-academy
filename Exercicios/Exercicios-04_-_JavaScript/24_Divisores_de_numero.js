function divsNum(num) {
    let divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisores.push(i);
        }
    }
  return divisores;
}

const num = 135;
console.log("Divisores de " + num + ": " + divsNum(num));
