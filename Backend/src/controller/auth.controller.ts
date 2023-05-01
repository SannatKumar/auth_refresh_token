import {Request, Response} from 'express';
import { myDataSource } from '../../app-data-source';
import { user } from '../entity/user.entity';
import bcryptjs from 'bcryptjs';
import {sign, verify} from 'jsonwebtoken';
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

    //Create a access token
    const accessToken = sign({
        id: userData.id,// Payload: id of the user
        },
        process.env.ACCESS_SECRET || '',
        {
            expiresIn: '30s'
        }
    );

    //Create Refresh Token// Refresh Token job is to create new accessToken when the last token expires
    const refreshToken = sign({
        id: userData.id,// Payload: id of the user
        },
        process.env.REFRESH_SECRET || '',
        {
            expiresIn: '1w'
        }
    );

    //Set the access token in a http only cookie
    res.cookie('access_token', accessToken,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //1 day max age to expire
    });

    //Set the access token in a http only cookie
    res.cookie('refresh_token', refreshToken,{
        httpOnly: true,
        maxAge: 7* 24 * 60 * 60 * 1000 //7 days Max Age  to expire
    });

    //If Pasword Match return user for now.
    //res.send(userData);

    //Send access Token and RefreshToken
    // res.send({
    //     accessToken,
    //     refreshToken
    // });

    res.send({
        message: 'Success'
    });
}

//Authenticated User
export const AuthenticatedUser = async (req: Request, res: Response) =>{
    try{
        const cookie = req.cookies['access_token'];

        const payload: any = verify(cookie, process.env.ACCESS_SECRET || '');
        
        //Check if payload is set
        if(!payload){
            return res.status(401).send({
                message: 'No Payload. Unauthenticated'
            });
        }
        //Ge the user
        const userRepository = myDataSource.getRepository(user);

        //Find the user by id
        const userData = await userRepository.findOneBy({"id": payload.id});

        //Check if user is there
        if(!userData){
            res.status(401).send({
                message: 'No User Data. Unauthenticated'
            });
        }

        //Extract The Password out
        const {password, ...data} = userData;
         
        //Now return the authenticated user
        
        res.send(data);
    }catch (e){
        return res.status(401).send({
            message: 'Catch Block. UnAuthenticated'
        });
    }
    




    // //Send the cookie
    // res.send(cookie);
}

export const Refresh = async(req: Request, res: Response) => {
    try{
        const cookie = req.cookies['refresh_token'];

        const payload: any = verify(cookie, process.env.REFRESH_SECRET || '');

        if(!payload){
            return res.status(401).send({
                message: 'Unauthenticated'
            });
        }

        const accessToken = sign({
            id: payload.id
        }, process.env.ACCESS_SECRET || '', {expiresIn: '30s'});

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 //1 day max age to expire
        });

        res.send({
            message: 'Success'
        });
    }catch(e){
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
}

//Log out Method
export const LogOut = async(req: Request, res: Response) => {
    res.cookie('access_token', '', {maxAge: 0});
    res.cookie('refresh_token', '', {maxAge: 0});

    res.send({
        message: "Success"
    });


} 

export const CheckGetMethod = async (req: Request, res: Response) =>{

    if(req)
    {
        res.send({message: "Yes It is here"});    
    }
}