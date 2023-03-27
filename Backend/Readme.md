## Backend Doumentation

-- Install Nodejs in your computer

Create a New Folder.
Go to the folder and create a Folder called Backend.
Run The command:

$npm init

This will create a package.json.

Now, create a folder called src inside Backend folder.

Create a javascript file called index.js inside src file. 

Write a console.log Statement inside index.js.

For Example: console.log("Hello Raj");

Go to the package.json file and change inside scripts

Write the following line.

"start": "node src/index.js",

Just to test The index.js file,

Run the command in the terminal:

$npm start

This should print the Hello Raj in the console.

Now install nodemon to auto update the changes and reload the code.

Nodemon installation command.
$npm i nodemon

After installing the nodemon,

o to the package.json file and change inside scripts

Change the following line.

"start": "node src/index.js",

To

"start": "nodemon src/index.js",

Again run the command,
$npm start

and Try to change the the console result while the program is running.
This should auto update the result.

Install TypeScript with the command

$npm i -g typescript

This will install typescript globally.

Install the devdependencies for typescript with the command.

$npm i -D typescript

Now we have insatll the typescript, we need to install configuration for typescript with the command

$tsc --init

This will create tsconfig.json.
We need this file to configure typescript otherwise it will throw and error.

Create a file under the main folder with the name
nodemon.json

This file we tell the nodemon where to watch and what kind of file extension. 

Install ts-node with the following command:

$npm i ts-node typescript

Run the command:
$npm start

This should run now the typescript file.

Install Express, Express is a popular framework for nodejs.
The installation command:

$npm i express

Also install the dev dependencies for typescript

$npm i -D @types/express

Route
After this go to, 
localhost:8000
There we can see the result
Hello 

Now lets use the database, 
We use mysql database. 

See the database Readme-->


After the MySQL is up and running Install TypeORM to connect with Database.
The installation command:

$npm install typeorm --save

$npm install reflect-metadata --save

$npm install @types/node --save-dev

MySQL Driver command:

$npm install mysql2 --save

After all the installation,

Create an ormconfig.json file and write the database configuration to that file in json format.
 











