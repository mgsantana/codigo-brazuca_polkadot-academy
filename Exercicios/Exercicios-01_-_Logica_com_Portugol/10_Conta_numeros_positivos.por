programa {
  funcao inicio()
  {
    inteiro num, contador = 0

    para(inteiro i = 1; i <= 5; i++)
    {
      escreva("Digite o n�mero ", i, ": ")
      leia(num)

      se (num > 0)
      {
        contador++
      }
    }
    escreva("Voc� digitou ", contador, " n�meros positivos.")
  }
}
