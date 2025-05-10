CREATE DATABASE userDB;

USE userDB;

CREATE TABLE users (
id INT PRIMARY KEY auto_increment,
username VARCHAR(20) NOT NULL,
password VARCHAR(200)
);

SELECT * FROM users;

CREATE TABLE academias(
if_academia INT PRIMARY KEY AUTO_INCREMENT,
nome_academia VARCHAR(200),
endereço_academia VARCHAR(200),
user_id INT,
FOREIGN KEY (user_id)
REFERENCES users(id)
);

DROP TABLE academias;

INSERT INTO academias VALUES
(NULL,'Xprime','AV.Reinaldo Chioca',2),
(NULL,'SmartFir','Av.Alonso Y alonso',3);


SELECT u.username, a.nome_academia 
FROM users u
JOIN academias a ON u.id = a.user_id;

SELECT * FROM academias
INNER JOIN users
ON users.id = academias.user_id;