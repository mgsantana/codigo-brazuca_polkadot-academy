function saudacao(nome: string, idade?: number, cidade?: string, pais?: string): string {
    return `Olá, ${nome}!` +
        (idade ? ` Você tem ${idade} anos.` : "") +
        (cidade ? ` Você vive em ${cidade}.` : "") +
        (pais ? ` País: ${pais}.` : "");
}

console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30));
console.log(saudacao("Paulo", 27, "Belo Horizonte"));
console.log(saudacao("Catarina", 18, "Rio de Janeiro", "Brasil"));
console.log(saudacao("Adolfo", undefined, "Lisboa", "Portugal"));
