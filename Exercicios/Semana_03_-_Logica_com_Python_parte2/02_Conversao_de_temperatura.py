#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada do valor da temperatura para conversão
temp = float(input("Digite a temperatura em °C para conversão: "))

# Conversão da temperatura em Fahrenheit e Kelvin
fahrenheit = (temp * 9/5) + 32
kelvin = temp + 273.15

# Imprime o resultado da conversão para Fahrenheit e Kelvin
print("Temperatura em Fahrenheit: ", f"{fahrenheit:.2f}", "°F")
print("Temperatura em Kelvin: ", f"{kelvin:.2f}", "K")
