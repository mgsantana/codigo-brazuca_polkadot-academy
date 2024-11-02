class Animal {
  nome: string;
  som: string;
  constructor(nome: string, som: string) {
	this.nome = nome;
	this.som = som;
  }
  
  emitirSom(): string {
	return `${this.nome} faz ${this.som}`;
  }
}

class Cachorro extends Animal {
	raca: string;
  constructor(nome: string, som: string, raca: string) {
	super(nome, som);
	this.raca = raca;
  }
  
  // Novo método para mudar a intensidade do som de acordo com a raça
  volumeLatido(): void {
	switch (this.raca) {
	  case "Pincher":
		this.som = "au au";
		break;
	  case "Labrador":
		this.som = "Au Au";
		break;
	  case "Golden":
		this.som = "AU AU AU!!!"
		break;
	}
  }
}

const rex = new Cachorro("Rex", "au au", "Pincher");
const nina = new Cachorro("Nina", "au au", "Labrador");
const zeus = new Cachorro("Zeus", "au au", "Golden");


rex.volumeLatido();            
console.log(rex.emitirSom());
console.log(`Raça: ${rex.raca}\n`);

nina.volumeLatido();            
console.log(nina.emitirSom());
console.log(`Raça: ${nina.raca}\n`);

zeus.volumeLatido();            
console.log(zeus.emitirSom());
console.log(`Raça: ${zeus.raca}\n`);
