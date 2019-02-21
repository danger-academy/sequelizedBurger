  -- drop database if exists burgers_db2;
     CREATE DATABASE rhrasmcc2p5rp37r;
     USE burgers_db2;

     CREATE TABLE burgers(
       id int NOT NULL AUTO_INCREMENT,
       burger_name VARCHAR(255) NOT NULL,
       devoured BOOLEAN DEFAULT false,
       -- date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       PRIMARY KEY (id)
     );

