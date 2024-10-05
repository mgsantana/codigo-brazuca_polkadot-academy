programa {
  funcao inicio()
  {
    inteiro num, fatorial = 1

    escreva("Digite um número inteiro positivo: ")
    leia(num)

    para(inteiro i = 1; i <= num; i++)
    {
      fatorial = fatorial * i
    }

    escreva("O fatorial de ", num, " é: ", fatorial)
  }
}
