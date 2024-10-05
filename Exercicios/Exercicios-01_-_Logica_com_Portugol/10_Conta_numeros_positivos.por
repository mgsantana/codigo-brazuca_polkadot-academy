programa {
  funcao inicio()
  {
    inteiro num, contador = 0

    para(inteiro i = 1; i <= 5; i++)
    {
      escreva("Digite o número ", i, ": ")
      leia(num)

      se (num > 0)
      {
        contador++
      }
    }
    escreva("Você digitou ", contador, " números positivos.")
  }
}
