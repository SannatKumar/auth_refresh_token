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

Create an app-data-source.ts file and write the database configuration to that file.

Create a database connection in server.ts file.
The code is under create database connection comment section.

After this Process the code has been moved inside database connection because database connection is needed before listening to port 8000.

*** Experimental decorators are uncomment to remove the error while creating entities ***
- Entities

Create entity folder inside src folder.

Create routes.ts inside src folder.

Inside Roues.ts create a post route called 'api/register' and call a function from 
auth.controller.ts.
This auth.controller.ts file is inside newly created controller folder.


*********** Hash The Password With bcrypt js.*********

Installation command for brcypt.js
$npm i bcryptjs

Install devdependencies with the following command.

$npm i -D @types/bcryptjs

After saving the data to database, lets login with the saved user.

Now Install JSONWebTokens for uniquely idenfy for our users
Command:

$npm i jsonwebtoken

For devdependencies

$npm i -D @types/jsonwebtoken


Access Token and Refresh token are created using jwt.io. jsonwebtokens.
Store them in a http only cookie.

Now CORS(Cross-origin Resource Sharing)
Install Cross Origin Resource Sharing with the package command:
$npm i cors

Devdependencies
$npm i -D @types/cors

Install dotenv
$npm i dotenv

Write your access secret to .env file.
This will help in change of secrets in local and production machine. 
Now require .env in the begining of the app.

Lets get the Authenticated User
Createa function In Auth.controller.ts.

Install cookieparser with command:
$npm i cookie-parser

Install Devdependencies
$npm i -D @types/cookie-parser


First Login and try the authenticated user path because of the cookie expiry time.

Install Nodemailer both library and devdependencies.
$npm i nodemailer
$npm i -D @types/nodemailer

Now Create the Front End

$npx create-react-app react-auth --template typescript

Install React Router Dom

$npm i react-router-dom
$npm i -D @types/react-router-dom


























