#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada para a frase a ser verificada
frase = input("Digite a frase a ser verificada: ")
vogal = ["a", "e", "i", "o", "u"]

# Define a função para contagem das vogais existentes na frase
def conta_vogais(frase):
    quantVogais = 0
    for i in range(5):
        quantVogais += frase.lower().count(vogal[i])
    return quantVogais

# Imprime o resultado da contagem de vogais existem na frase
print("A frase digitada tem", conta_vogais(frase), "vogais.")
