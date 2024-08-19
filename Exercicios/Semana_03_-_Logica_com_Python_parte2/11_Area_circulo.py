#!/usr/bin/python
# -*- coding: utf-8 -*-
import math  # Importa módulo math do python

# Define variável de entrada com o valor do raio da circunferência
raio = float(input("Digite o valor do raio da circunferência em cm: "))
area = math.pi * raio **2

print("O valor da área do círculo é:", f"{area:.2f}", "cm²")
