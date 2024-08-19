#!/usr/bin/python
# -*- coding: utf-8 -*-

# Laço para entrada dos números a serem ordenados
numeros = []
for i in range(3):
    num = int(input("Digite o próximo número a ser ordenado: "))
    while num in numeros:
        num = int(input("Digite um número ainda não digitado: "))
    numeros.append(num)

# Define função para ordenação dos números digitados
def ord_num(numeros):
    fim = 3
    while fim > 0:
        i = 0
        while i < fim -1:
            if numeros[i] > numeros[i+1]:
                temp = numeros[i]
                numeros[i] = numeros[i+1]
                numeros[i+1] = temp
            i += 1
        fim -= 1
    return numeros

# Imprime a lista de números em ordem crescente, com chamada da função 'ord_num'
print("Lista dos números em ordem crescente:", ord_num(numeros))
