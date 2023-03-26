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

