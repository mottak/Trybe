--  Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
USE Pixar;
SELECT mo.title AS 'titulo',
bo.domestic_sales AS 'Vendas nacionais',
bo.international_sales AS 'Vendas internacionais'
FROM BoxOffice AS bo
INNER JOIN Movies as mo
ON bo.movie_id = mo.id;

--  Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
USE Pixar;
SELECT mo.title AS 'titulo',
bo.domestic_sales AS 'Vendas nacionais',
bo.international_sales AS 'Vendas internacionais'
FROM BoxOffice AS bo
INNER JOIN Movies as mo
ON bo.movie_id = mo.id
HAVING `Vendas internacionais` > `Vendas nacionais`;

--  Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
USE Pixar;
SELECT mo.title AS 'titulo',
bo.rating AS 'Avaliação'
FROM BoxOffice AS bo
INNER JOIN Movies as mo
ON bo.movie_id = mo.id
ORDER BY `Avaliação` DESC;

--  Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
USE Pixar;
SELECT th.name AS 'Cinema',
th.location AS 'Localização do cinema',
mo.title AS 'Filme'
FROM Theater AS th
LEFT JOIN Movies as mo
ON th.id = mo.theater_id
ORDER BY `Cinema`;

--  Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
USE Pixar;
SELECT th.name AS 'Cinema',
mo.title AS 'Filme',
mo.director AS 'Diretor',
mo.year AS 'Ano de lançamento',
mo.length_minutes AS 'Duração em min'
FROM Theater AS th
LEFT JOIN Movies as mo
ON th.id = mo.theater_id
ORDER BY `Cinema`;

--  Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
USE Pixar;
SELECT
mo.title AS 'Filme',
mo.director AS 'Diretor',
mo.year AS 'Ano de lançamento',
mo.length_minutes AS 'Duração em min'
FROM Movies AS mo
INNER JOIN BoxOffice as bo
ON mo.id = bo.movie_id
WHERE bo.rating > 7.5

USE Pixar;
SELECT
title AS 'Filme',
director AS 'Diretor',
year AS 'Ano de lançamento',
length_minutes AS 'Duração em min'
FROM Movies
WHERE id IN (
     SELECT movie_id FROM BoxOffice
     WHERE rating > 7.5);

--  Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
USE Pixar;
SELECT bo.rating AS 'Avaliação'
FROM BoxOffice AS bo
JOIN Movies AS mo
ON bo.movie_id = mo.id
WHERE mo.year >2009

USE Pixar;
SELECT rating AS 'Avaliação' FROM BoxOffice
WHERE movie_id IN (
     SELECT id FROM Movies
     WHERE year > 2009);

--  Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
USE Pixar;
SELECT th.name, th.location FROM Theater AS th
WHERE EXISTS(
SELECT * FROM Movies
WHERE Movies.theater_id = th.id);


-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
USE Pixar;
SELECT th.name, th.location FROM Theater AS th
WHERE NOT EXISTS(
SELECT * FROM Movies
WHERE Movies.theater_id = th.id);