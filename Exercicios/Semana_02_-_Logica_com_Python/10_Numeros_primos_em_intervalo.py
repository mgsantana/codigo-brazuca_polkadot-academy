#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define as variáveis de entrada
num1 = int(input("Digite o número inicial do intervalo de interesse: "))
num2 = int(input("Digite o número final do intervalo de interesse: "))

listPrimos = []   # Define a lista para guardarmos os números primos

# Define a função para teste dos números primos
def eh_primo(num):
    if num <= 1:
        return False
    for i in range(2,int(num **0.5)+1):
        if num % i == 0:
            return False
    return True

# Laço para teste dos números através da chamada da função 'eh_primo'
for i in range(num1,num2):
    if eh_primo(i) == True:
        listPrimos.append(i)

# Imprime a lista com os números primos encontrados no intervalo
print("Os números primos entre", num1, "e", num2, "são:", listPrimos)
