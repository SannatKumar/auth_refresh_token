//Import Express
import express, {Request, Response} from 'express';

//import create connection from typeorm package
import  {myDataSource}  from "../app-data-source";

//create database connection
myDataSource.initialize().then(() => {
    console.log("Data Source has been initialized");
})
.catch((err : any) => {
    console.error("Error during Data Source initialization:", err);
})

//create a app as a function
const app = express();

//Define the port
const PORT = 8000;

//use express as json
app.use(express.json());

//create a route

app.get('/', (req: Request, res: Response) =>{
    res.send({body: 'Hello'});
});

//listen to the port
app.listen(PORT, () => {
    console.log('listening to port 8000');
});

