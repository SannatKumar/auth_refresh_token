import {Request, Response} from 'express';

//Resgister function to register the user
export const Register = (req: Request, res: Response) =>{
    //Get the body from Postman Post Request
    const body = req.body;

    //Send the response Body back as it is for testing.
    res.send(body);
}