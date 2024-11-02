interface Produto {
  nome: string;
  preco: number;
  disponivel: boolean;
  categoria?: string;
}

function filtrarDisponiveis(produtos: Produto[], categoria?: string): Produto[] {
  return produtos.filter(produto =>
	produto.disponivel && (!categoria || produto.categoria === categoria));
}

const produtos: Produto[] = [
  { nome: "Teclado", preco: 100, disponivel: true, categoria: "Periféricos" },
  { nome: "Mouse", preco: 50, disponivel: false, categoria: "Periféricos" },
  { nome: "Monitor", preco: 300, disponivel: true, categoria: "Monitores" },
  { nome: "Cadeira", preco: 500, disponivel: true, categoria: "Móveis" },
  { nome: "Mesa", preco: 750, disponivel: true, categoria: "Móveis" },
];

console.log(filtrarDisponiveis(produtos)); // Filtra todos os disponíveis
console.log(filtrarDisponiveis(produtos, "Periféricos")); // Filtra disponíveis na categoria "Periféricos"
console.log(filtrarDisponiveis(produtos, "Móveis")); // Filtra disponíveis na categoria "Móveis"
