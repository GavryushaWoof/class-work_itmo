/*
Устанавливаем версию 8
В конце установки настраиваем пароль пользователя root (даём пароль root).
Запускаем консоль и переходим в папку куда установился сервер:
cd C:\Program Files\MySQL\MySQL Server 8\bin\
Запускаем консоль mysql:
mysql.exe -u root -p
Вводим пароль root
*/

CREATE DATABASE firstDB CHARACTER
SET utf8 COLLATE utf8_general_ci;

CREATE USER 'admin'@'localhost'
IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON firstDB.* TO
'admin'@'localhost';

ALTER USER 'admin'@'localhost' 
IDENTIFIED WITH mysql_native_password BY 'admin';

USE firstDB;

CREATE TABLE tasks
(
 id INT NOT NULL AUTO_INCREMENT,
 name varchar(100) default NULL,
 isDelete tinyint(1) default NULL,
 PRIMARY KEY (id)
) ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8;