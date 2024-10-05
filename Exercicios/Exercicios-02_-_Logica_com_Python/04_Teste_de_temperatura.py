#!/usr/bin/python
# -*- coding: utf-8 -*-

temp = int(input("Digite a temperatura atual em °C: "))   # Lê o valor da temperatura

# Realiza os testes condicionais
if temp < 15:
    print("O clima está frio! 🥶")    # Imprime a mensagem para clima frio
if 15 < temp < 30:
    print("O clima está agradável. 😎")  # Imprime a mensagem para clima agradável
if temp > 30:
    print("O clima está quente! 🥵")  # Imprime a mensagem para clima quente
