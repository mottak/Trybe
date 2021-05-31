import random
import string_utils
import json
from csv import csv_writer

# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. 

def print_vertical(name):
    # retirar a ultima letra dentro de um for, e imprimir, a cada iteração
    for _ in range(len(name)):
        new_name = name[: -1]
        print(new_name)
        name = new_name

# imprime_vertical("pedro")

# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .

FRUITS = ["grape", "apple", "banana", "orange", "mango"]

def guess_word():
    random_fruit = random.choice(FRUITS)
    shuffle_fruit = string_utils.shuffle(random_fruit)
    print(shuffle_fruit)
    return random_fruit

# if __name__ == "__main__":
#     fruit = guess_word()
#     cont = 0
#     while cont < 3:
#         user_guess = input("Adivinhe a fruta: ")
#         if user_guess == fruit:
#             print("fruta certa!")
#             cont = 4
#         cont += 1
#         if(cont == 3):
#            print("Esgotaram as tentativas")



# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada animal em uma linha.

def guess_word_file():
    fruit_file = open("exercicio3.txt", mode="r")
    for line in fruit_file:
        fruit_list = fruit_file.read()
    fruit_file.close()
    the_fruit_list = fruit_list.split('\n')
    random_fruit = random.choice(the_fruit_list)
    shuffle_fruit = string_utils.shuffle(random_fruit)
    print(shuffle_fruit)
    return random_fruit


# if __name__ == "__main__":
#     fruit = guess_word_file()
#     cont = 0
#     while cont < 3:
#         user_guess = input("Adivinhe a fruta: ")
#         if user_guess == fruit:
#             print("fruta certa!")
#             cont = 4
#         cont += 1
#         if(cont == 3):
#            print("Esgotaram as tentativas")

# Exercício 4: Dado o seguinte arquivo n) no formato JSON , leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# lê arquivo books
def read_books_file():
    json_list = []
    with open("books.json") as file:
        for line in file:
            book = json.loads(line)
            json_list.append(book)
    return json_list


# busca as categorias que existem
def get_categories():
    book_list = read_books_file()
    category_list = set()
    for book in book_list:
        for category in book["categories"]:
            category_list.add(category) 
    return category_list



# conta a quantidade de cada categoria
def count_categories():
    qtd_category_list = {}
    book_list = read_books_file()
    categories_list = get_categories()
    for category in categories_list:
        count = 0 # a cada category vai vai ser um contador diferente, será sempre reiniciado
        for book in book_list:
            if category in book["categories"]:
                count += 1
        qtd_category_list[category] = count
    return qtd_category_list


# calcula a porcentagem de livros em cada categoria e escreve no formato CSV
def calc_percent():
    books = read_books_file()
    qtd_category_list = count_categories()
    all_books = len(books)
    percent_list = {}
    with open("report.csv", "w") as new_file:
        writer = csv_writer(new_file)
        writer.writewrow(["Categoria", "Porcentagem"])
        for category in qtd_category_list:
            percent_list[category] = ( qtd_category_list[category])/all_books
            writer.writerows(percent_list)
    return percent_list

print(calc_percent())
    



