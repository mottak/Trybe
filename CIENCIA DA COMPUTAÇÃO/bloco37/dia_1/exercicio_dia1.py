import random
from statistics import mean

# Exercício 1 Dado um array de números de tamanho n , escreva um algoritmo que retorna true 
# se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga 
# qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.
# def contains_duplicate(numbers):
#     numbers.sort()
#     previous_number = 'not a number'
#     for number in numbers:
#         if(previous_number == number): return True
#         previous_number = number

#     return False
    # analisando só o for:
    # melhor caso, 0(1): [] 
    # pior caso, 0(5): [1, 2, 3, 4, 4]
    # caso medio, 0(3): [1, 2, 3, 3, 4]

    # sort -> nlog(n)
    # for -> O(n)
    #  como não está aninhado é somado a complexidade, ou sejam
    # nlog(n) + O(n)
    # melhor caso: O(n)
    # pior caso:

# Exercício 2 Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado
#  um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y 
# para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:
# Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?

# def batalha_naval(array, x, y):
#     for column in array :
#         for line in array:
#             if(y == column and x == line):
#                 return True
#     return False

    # complexidade da solução: n²
    # complexidade de espaço: n²

# Exercício 5 Utilize o módulo random da linguagem Python para gerar um array com 100 números.
# Cada um desses números deve ser a média de dez números gerados aleatóriamente. Qual é a ordem
# de complexidade de tempo e de espaço deste programa?

def random_numbers():
    cont = 100
    lista = []
    sum_nums = 0
    while cont > 0:
        cont_2 = 0
        while cont_2 <= 10:
            nums = random.randint(1, 10)
            sum_nums += nums #lista de 10 numero ateatorios
            cont_2 +=1
        lista.append((sum_nums/10))
        sum_nums = 0
        cont -= 1
    return lista

  
# ordem de complexidade de tempo e de espaço
    # complexidade randint: O.log(n)
    # cada while: n
    # n * n
    # n² * O.log(n) = nlog(n) base 2


# if __name__ == '__main__':
#     print(random_numbers())

# Exercício 6 Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] 
# representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma 
# maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de 
# doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código 
# abaixo para o melhor, pior caso e caso médio. Faça a analise de complexidade de espaço também.

def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

