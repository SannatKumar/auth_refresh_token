## Database

- Install MySQL in your local machine.

Create a Database name 'authentication_app'.

And Start to create Database tables.

First we start by creating tablefor users.


# Tables

- Users Table

The below mentioned query will help you create a table called users.

CREATE TABLE `authentication_app`.`users` (
  `id` INT PRIMARy KEY NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `repassword` VARCHAR(45) NULL
COMMENT = 'The table to keep the users records.';

