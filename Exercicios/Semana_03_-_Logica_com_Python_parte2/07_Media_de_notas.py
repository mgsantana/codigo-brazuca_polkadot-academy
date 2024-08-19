#!/usr/bin/python
# -*- coding: utf-8 -*-

# Inicia as variáveis utilizadas no cálculo da média 
nota = None
somaNotas = 0
contaNotas = 0

# Laço para entrada das notas e cálculo da média
while nota != -1:
    # Define a variável de entrada das notas
    nota = float(input("Digite a próxima nota ou '-1' para realizar o cálculo da média: "))
    if nota != -1:
        somaNotas += nota
        contaNotas += 1
    else:
        media = somaNotas / contaNotas

# Apresenta o resultado do cálculo da média das notas digitadas com 2 casas decimais
print("A média das notas digitadas é:", f"{media:.2f}")
