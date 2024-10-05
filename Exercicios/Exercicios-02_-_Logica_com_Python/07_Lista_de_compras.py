#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define os itens inicias da lista de compras
lista = ["Ovos", "Leite", "Uvas"]

# Laço para adição de itens a lista de compras
item = None
while item != "":
    # Solicita a entrada do próximo item até que seja pressionado 'ENTER'
    item = input("Digite o próximo item, ou tecle 'ENTER' para exibir a lista de compras: ")
    if item != "":
        lista.append(item)
print("Lista de compras:", lista)   # Imprime a mensagem com o resultado do somatório
