suma = 0

def fibo(n):

    if(n <= 1):
        return n
    else:
        suma = fibo(n-1) + fibo(n-2)



print(suma)

