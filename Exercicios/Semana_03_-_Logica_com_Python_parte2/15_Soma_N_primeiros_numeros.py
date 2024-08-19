#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada do último número a ser somado
num = int(input("Digite o último número a ser somado: "))

# Laço de iteração para soma dos valores do intervalo
somaNumeros = 0
for i in range(1,num+1):
    somaNumeros += i

# Imprime o resultado do somatório do intervalo selecionado
print("Resultado do somatório dos número de 1 a", num, ":", somaNumeros)
