CREATE database atividadeCloud;

USE atividadeCloud;    

CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    value INT NOT NULL
);

INSERT INTO Product (name, value)
VALUES ('Balde', 100),
       ('Caixa', 200),
       ('Bola', 300);
