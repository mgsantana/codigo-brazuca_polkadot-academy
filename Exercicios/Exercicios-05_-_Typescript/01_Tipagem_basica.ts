let nome: string = "Alice";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["Leitura", "Esporte", "Música", "Artes", "Turismo"];
let endereco: { pais: string; estado: string; cidade: string; bairro: string } = { pais: "Brasil", estado: "Minas Gerais", cidade: "Belo Horizonte", bairro: "Ouro Preto" };

console.log(`Nome: ${nome}, Idade: ${idade} anos, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.pais}, ${endereco.estado}, ${endereco.cidade}, ${endereco.bairro}`);

