#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define as variáveis de entrada de peso e altura
peso = float(input("Digite o peso da pessoa em kg: "))
altura = float(input("Digite a altura da pessoa em m: "))

# Define da função 'calc_imc' para cálculo do IMC
def calc_imc(peso, altura):
    imc = peso / (altura **2)
    return imc

# Imprime o resultado do IMC em kg/m² com duas casa decimais, chamando a função 'calc_imc'
print("Índice de massa corporal (IMC) da pessoa:", f"{calc_imc(peso,altura):.2f}", "kg/m²")
