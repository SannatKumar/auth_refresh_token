import {Request, Response} from 'express';
import { myDataSource } from '../../app-data-source';
import { user } from '../entity/user.entity';
import bcryptjs from 'bcryptjs';
import { getRepository } from 'typeorm';

//Register function to register the user
export const Register = async (req: Request, res: Response) =>{
    //Get the body from Postman Post Request
    const body = req.body;

    //Hash the password with bcrypts

    //Check whether password and password confirm are same
    if(body.password !== body.password_confirm){
        return res.status(400).send({
            message: "Password do not match!"
        });
    }
    /*Remember to add validation for data types and mandatory values*/

    //Get repository first
    const userRepository = myDataSource.getRepository(user);


    
    //import Repository for the user
    const userData = await userRepository.save({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: await bcryptjs.hash(body.password, 12)
    });

   //send the result back
   res.send(userData);
    //Send the response Body back as it is for testing.
    //res.send(body);
}

export const Login = async (req: Request, res: Response) =>{
    //get The user Repository
    const userRepository = myDataSource.getRepository(user);
    //Use await to findOne User with the email
    const userData = await userRepository.findOneBy({
        "email": req.body.email});

    //If no user found Send the error message Invalid Credentials
    if(!userData){
        return res.status(400).send({
            message: 'Invalid Credentials'
        });
    }

    //if userData found compare the password with bcryptjs and if not true return Invalid Credentials
    if(!await bcryptjs.compare(req.body.password, userData.password)){
        return res.status(400).send({
            message: 'Invalid Credentials'
        });
    }

    //If Pasword Match return user for now.
    res.send(userData);
}