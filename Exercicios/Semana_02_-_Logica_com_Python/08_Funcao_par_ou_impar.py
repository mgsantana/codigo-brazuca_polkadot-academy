#!/usr/bin/python
# -*- coding: utf-8 -*-

num = int(input("Digite um número a ser testado: "))  # Variável de entrada do número a ser testado

# Define a função 'test_par' que testa se o número digitado é par ou ímpar
def test_par(num):
    if num % 2 == 0:
        print("O número", num, "é par")
    else:
        print("O número", num, "é ímpar")

test_par(num)   # Chama a função com o argumento de entrada que for digitado
