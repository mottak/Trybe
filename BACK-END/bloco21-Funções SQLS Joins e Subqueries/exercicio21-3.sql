-- 1- Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a action como 'INSERT' e a log_date como a data atual.

USE BeeMovies;
DELIMITER $$
CREATE TRIGGER define_realease_year
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.realease_year = YEAR(NOW());
END $$

CREATE TRIGGER new_register
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movie_logs(movie_id, action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;


--  2-Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , action e log_date ).

USE BeeMovies;
DELIMITER $$
CREATE TRIGGER define_realease_year
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
	INSERT INTO movies_logs(movie_id, action, log_date)
		VALUES(NEW.movie_id, 'UPDATE', NOW());
	
END $$
DELIMITER ;

-- 3-Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a action 'DELETE' e o id do filme excluído.
USE BeeMovies;
DELIMITER $$
CREATE TRIGGER define_realease_year
	BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, action, log_date)
		VALUES(OLD.movie_id, 'DELETE', NOW());
	
END $$
DELIMITER ;