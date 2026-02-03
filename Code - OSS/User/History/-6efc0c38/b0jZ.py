suma = 0

def fibo(n):

    if(n <= 1):
        return n
    else:
        return (n-1) + fibo(n-2)



resultado = fibo(5)

