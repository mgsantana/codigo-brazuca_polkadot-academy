#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada do número a ser testado
num = int(input("Digite um número para verificar se ele é perfeito: "))

# Laço de iteração para soma dos divisores do número digitado
somaDivisores = 0    # Variável de soma dos divisores do número
for i in range(1,num-1):
    if num % i == 0:
        somaDivisores += i

# Laços de teste para impressão do resultado
if somaDivisores == num:
    print(num, "é um número perfeito!")
else:
    print(num, "não é um número perfeito.")
