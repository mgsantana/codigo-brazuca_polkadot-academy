#!/usr/bin/python
# -*- coding: utf-8 -*-

# Inicia as variáveis de entrada e de cálculo
soma = 0
num = None

# Laço para somatório dos números digitados
while num != 0:
    # Solicita a entrada de números até que seja digitado '0'
    num = int(input("Digite o próximo número, ou '0' para executar o somatório: "))
    soma += num
print("A soma dos números digitados é:", soma)   # Imprime a mensagem com o resultado do somatório
