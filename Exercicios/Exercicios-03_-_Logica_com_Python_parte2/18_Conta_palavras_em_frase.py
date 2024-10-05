#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada para a frase digitada
frase = input("Digite uma frase para a contagem de palavras: ")

# Contador de palavras da frase digitada
contaPalavras = len(frase.split())
print("A frase digitada tem", contaPalavras, "palavras.")
