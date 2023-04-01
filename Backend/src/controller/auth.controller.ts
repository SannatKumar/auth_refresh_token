import {Request, Response} from 'express';

//Resgister function to register the user
export const Register = (req: Request, res: Response) =>{
    //Get the body from Postman Post Request
    const body = req.body;

    //Check whether password adn password confirm are same
    if(body.password !== body.password_confirm){
        res.status(400).send({
            message: "Password do not match!"
        });
    }
    //Send the response Body back as it is for testing.
    res.send(body);
}