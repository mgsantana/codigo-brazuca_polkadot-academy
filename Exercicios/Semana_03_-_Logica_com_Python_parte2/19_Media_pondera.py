#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define as variáveis de entrada das notas a serem digitadas
num1 = float(input("Digite a primeira nota para o cálculo da média: "))
num2 = float(input("Digite a segunda nota para o cálculo da média: "))
num3 = float(input("Digite a terceira nota para o cálculo da média: "))

# Calcula a média ponderada e atribui o valor a variável 'media'
media = ((num1 * 2) + (num2 * 3) + (num3 * 5)) / (2 + 3 + 5) 

# Imprime o resultado da média ponderada com duas casas decimais
print("Média ponderada das notas:", f"{media:.2f}")
