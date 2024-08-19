#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define as variáveis a serem usada na captura dos números digitados
num = None
numList = []
# Laço de iteração para geração da lista do números digitados
while num != 0:
    num = int(input("Digite o próximo número a ser adicionado à lista ou '0' para concluir: "))
    if num != 0:
        numList.append(num)

# Imprime o maior, o menor número e a média dos valores, com uso das funções "max, min, sum e len"
print("Maior número digitado:", max(numList))
print("Menor número digitado:", min(numList))
print("Média dos números digitados:", (sum(numList) / len(numList)))
