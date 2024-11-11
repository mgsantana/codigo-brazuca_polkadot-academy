enum DiasSemana {
  Segunda = "Segunda-feira",
  Terca = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sabado = "Sábado",
  Domingo = "Domingo",
  AnoNovo = "Ano Novo",
  Carnaval = "Carnaval",
  Pascoa = "Páscoa",
  DiaIndependencia = "Dia da Independência",
  Natal = "Natal"
}

function ehFimDeSemana(dia: DiasSemana): boolean {
  return dia === DiasSemana.Sabado ||
	dia === DiasSemana.Domingo ||
	dia === DiasSemana.AnoNovo ||
	dia === DiasSemana.Carnaval ||
	dia === DiasSemana.Pascoa ||
	dia === DiasSemana.DiaIndependencia ||
	dia === DiasSemana.Natal;
}

console.log(ehFimDeSemana(DiasSemana.Domingo));
console.log(ehFimDeSemana(DiasSemana.Quinta));
console.log(ehFimDeSemana(DiasSemana.AnoNovo));
console.log(ehFimDeSemana(DiasSemana.DiaIndependencia));
