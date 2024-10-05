#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define variável de entrada do número a ser testado
num = int(input("Digite o número inteiro a ser verificado: "))

# Laço para teste se o número é para ou ímpar
if num % 2 == 0:
    print("O número",num,"é par!")
else:
    print("O número",num,"é ímpar.")
