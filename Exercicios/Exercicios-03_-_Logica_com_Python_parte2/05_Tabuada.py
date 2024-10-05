#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada do número do qual queremos apresentar a tabuada
num = int(input("Digite um número para apresentar a sua tabuada: "))

# Laço para cálculo da tabuada no número digitado
for i in range(1,11):
    produto = num * i
    print(num, " x ", i, "=", produto)
