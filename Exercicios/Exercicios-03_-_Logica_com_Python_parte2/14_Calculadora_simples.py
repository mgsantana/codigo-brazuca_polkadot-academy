#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define as variáveis de entrada
num1 = int(input("Digite o primero número para realização dos cálculos: "))
num2 = int(input("Digite o segundo número para realização dos cálculos: "))
operador = input("Tipo que cálculo a ser realizado (+, -, *, /): ")

# Laços condicionais para teste e realização das operações
if operador == "+":
    soma = num1 + num2
    print("Resultado da soma dos números digitados:", soma)
elif operador == "-":
    subtracao = num1 - num2
    print("Resultado da subtração dos números digitados:", subtracao)
elif operador == "*":
    produto = num1 * num2
    print("Resultado da multiplicação dos números digitados:", produto)
elif operador == "/":
    divisao = num1 / num2
    print("Resultado da divisão dos números digitados:", f"{divisao:.2f}")
