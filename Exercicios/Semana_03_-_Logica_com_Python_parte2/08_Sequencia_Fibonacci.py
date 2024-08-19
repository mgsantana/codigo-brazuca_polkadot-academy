#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define a variável de entrada da quantidade termos N 
N = int(input("Quantidade de termos da sequência de Fibonacci: "))

# Define a função para geração da sequência de Fibonacci
def calc_fibo(N):
    fibonacci = [0 , 1]
    i = 0
    while len(fibonacci) < N:
        soma  = fibonacci[i] + fibonacci[i+1]
        fibonacci.append(soma)
        i += 1
    return fibonacci

# Imprime a sequência dos primeiros N termos, chamando a função 'calc_fibo(N)'
print("Primeiros", N, "números da sequência de Fibonacci:", calc_fibo(N))
