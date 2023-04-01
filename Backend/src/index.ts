//Get the .env file configured.
require('dotenv').config(); 


//Import Express
import express, {Request, Response} from 'express';

//Import routes from routes.ts
import {routes} from './routes';

//import create connection from typeorm package
import  {myDataSource}  from "../app-data-source";

//import cors from cors
import cors from 'cors';

//import cookie parser from cookie-parser
import cookieParser from 'cookie-parser';

//create database connection
myDataSource.initialize().then(() => {
    console.log("Data Source has been initialized");
    //create a app as a function
    const app = express();

    //Define the port
    const PORT = 8000;

    //use express as json
    app.use(express.json());
    app.use(cookieParser());

    //Use the cors with app declare the front end origin here// Useful for the frontend
    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200'],
        credentials: true
    }))
    /*This is commented because all the routes are included inside routes.ts file
    //create a route
    app.get('/', (req: Request, res: Response) =>{
        res.send({body: 'Hello'});
    });
    */

    //Call the routes function here
    routes(app);
    //listen to the port
    app.listen(PORT, () => {
        console.log('listening to port 8000');
    });
})
.catch((err : any) => {
    console.error("Error during Data Source initialization:", err);
})



