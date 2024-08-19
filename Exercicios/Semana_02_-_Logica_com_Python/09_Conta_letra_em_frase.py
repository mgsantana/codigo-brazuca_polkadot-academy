#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define as variáveis de entrada
frase = input("Digite a frase a ser analisada: ")
letra = input("Digite a letra a ser contada: ")

quant = 0   # Inicia a variável de contagem
# Define a função que conta quantas vezes a letra aparece na frase 
def conta_letra(letra):
    quant = frase.lower().count(letra)
    return quant

# Imprime quantas vezes a letra aparece na frase
print("A letra '" + letra + "' aparece", conta_letra(letra), "vezes na frase")
