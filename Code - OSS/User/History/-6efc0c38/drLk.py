def factorial(n):
    if(n == 1):
        return 1
    else:
        print(n)
        return n * factorial(n-1) 



resultado = factorial(5)
print(resultado)

