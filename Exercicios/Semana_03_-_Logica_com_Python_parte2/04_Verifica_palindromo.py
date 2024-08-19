#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada palavra/frase a ser verificada, convertida em minúsculas
frase = (input("Digite a palavra/frase a ser verifiacada se é palíndromo: ")).lower()

# Define da função 'eh_palindromo' para verificação da frase
def eh_palindromo(frase):
    string_inversa = frase.lower()[::-1]   # Inverte a frase e guarda em uma variável auxiliar 
    if frase == string_inversa:
        print("A palavra/frase digitada é um palíndromo!")
    else:
        print("A palavra/frase digitada não é um palíndromo.")

eh_palindromo(frase)
