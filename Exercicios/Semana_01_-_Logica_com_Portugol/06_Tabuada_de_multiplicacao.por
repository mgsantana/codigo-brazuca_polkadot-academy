programa {
  funcao inicio()
  {
   inteiro num

   escreva("Digite um n�mero para ver a sua tabuada: ")
   leia(num)

   para(inteiro i = 1; i <= 10; i++)
   {
      escreva(num, " x ", i, " = ", num * i, "\n")
   }   
  }
}
