
# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def bigger_num(num1, num2):
    if(num1>num2):
        return num1
    if(num2>num1):
        return num2
    if(num2>num1):
        return 'os numeros são iguais'


# print(bigger_num(3, 2))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def media(lista):
    soma = 0
    for index in lista:
        soma += index
    return soma/len(lista)
        
# print(media([1, 2, 3, 4]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def monta_quadrado(lado):
  # O range gera uma sequência numérica de um valor inicial até um valor final(iniciando do zero se não for informado o start)
    for row in range(1, lado + 1):
        for column in range(1, lado + 1):
            # toda vez que completa uma iteração do primeiro for ele pula linha
            print('*', end="")
        print()

# print(monta_quadrado(4))


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .

def longest_name(name_list):
    the_name = name_list[0]
    for name in name_list:
        if len(name) > len(the_name):
            the_name = name
    return the_name


lista_nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
# print(longest_name(lista_nomes))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def calculo_latas_tinta(tam_parede):
    litros_tinta = tam_parede/3
    qtd_latas = round((litros_tinta/18) + 0.5)
    preco = 80 * qtd_latas
    info_pintar_parede = (qtd_latas, preco, tam_parede)
    return info_pintar_parede

# print(calculo_latas_tinta(60))

# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
# # condição de existencia de um triang: a soma de dois lados tem que ser sempre maior que o terceiro lado 


def verifica_triang(l1, l2, l3):
    if (l1 + l2< l3 or l1 + l3< l2 or l2 + l3< l1):
        return "Os lados informados não formam um triangulo"
    if(l1 == l2 and l1 == l3):
        return 'Triangulo Equilátero'
    if(l1 == l2 or l1 == l3 or l2 == l3):
        return 'Triangulo Isósceles'
    if(l1 != l2 and l1 != l3 and l2 != l3):
        return 'Triangulo Escaleno'

# print(verifica_triang(2, 1, 3))