//Import Express
import express, {Request, Response} from 'express';

//Import routes from routes.ts
import {routes} from './routes';

//import create connection from typeorm package
import  {myDataSource}  from "../app-data-source";

//create database connection
myDataSource.initialize().then(() => {
    console.log("Data Source has been initialized");
    //create a app as a function
    const app = express();

    //Define the port
    const PORT = 8000;

    //use express as json
    app.use(express.json());

    
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



