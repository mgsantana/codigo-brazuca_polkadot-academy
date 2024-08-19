#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada do número para cálculo do fatorial
num = int(input("Digite um número para cálculo do seu fatorial: "))

# Definição da função 'calc_fatorial' para cálculo do fatorial
def calc_fatorial(num):
    fatorial = 1
    for i in range(num, 0, -1):
        fatorial *= i
    return fatorial

# Imprime o resultado, com a chamada da função 'calc_fatorial'
print("O fatorial do número", num, "é:", calc_fatorial(num))
