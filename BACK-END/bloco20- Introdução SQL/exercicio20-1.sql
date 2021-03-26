// Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
// Resposta: clicando com botão direito na tabela e selecionar: Select Rows - Limit 1000


// Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
// Resposta: clicando com botão direito em'tables e selecionar: Create Table

// Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
// Nome da tabela: Filme
// Colunas:
// FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
// Descricao - não permite nulos, tipo texto (varchar(100);
// AnoLancamento - não permite nulos, tipo int;
// Nota - permite nulos, tipo int;


// Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
// Resposta: A coluna country_id faz referência a tabela country

// Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
// resposta: relação N para 1

// Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
// resposta: relação 1 para N

// Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
// resposta: relacionamento tabela filme e filme_actor-> 1:N
// relacionamento tabela adress e city_id-> 1:N
// relacionamento tabela coutry e adress -> N:1 