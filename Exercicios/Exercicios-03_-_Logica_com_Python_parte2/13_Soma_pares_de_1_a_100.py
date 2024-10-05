#!/usr/bin/python
# -*- coding: utf-8 -*-

# Iteração para soma dos números pares entre 1 e 100
somaPares= 0
for i in range(1,101):
    if i % 2 == 0:
        somaPares += i
# Imprime o resultado do somatório dos números pares de 1 a 100
print("Soma de todos os números pares de 1 a 100:", somaPares)
