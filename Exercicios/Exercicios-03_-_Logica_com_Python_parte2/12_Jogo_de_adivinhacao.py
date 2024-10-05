#!/usr/bin/python
# -*- coding: utf-8 -*-
import random   # Importa módulo random para geração do número secreto

# Geração do número secreto
numSecreto = random.randint(1,100)

# Laço de iteração para testes dos palpites
tentativas = 10   # Define o número máximo de tentativas
while tentativas > 0:
    num = int(input("Digite o seu palpite sobre o número secreto: "))
    tentativas -= 1
    if num == numSecreto:
        print("PARABÉNS, você acertou o número secreto!")
        break;
    elif num > numSecreto:
        print("Palpite errado, o número secreto é menor que o digitado")
    elif num < numSecreto:
        print("Palpite errado, o número secreto é maior que o digitado")

    # Testes para uso correto da concordância verbal
    if tentativas > 1:
        print("Restam", tentativas, "tentativas")
    elif tentativas == 1:
        print("Resta", tentativas, "tentativa")
    elif tentativas == 0:
        print("Você perdeu, usou todas as tentativas")
        break;
