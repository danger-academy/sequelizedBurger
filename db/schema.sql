  -- drop database if exists burgers_db2;
     CREATE DATABASE burgers_db2;
     USE burgers_db2;

     CREATE TABLE burgers(
       id int NOT NULL AUTO_INCREMENT,
       burger_name VARCHAR(255) NOT NULL,
       devoured BOOLEAN DEFAULT false,
       -- date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       PRIMARY KEY (id)
     );

