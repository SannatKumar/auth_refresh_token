import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { myDataSource } from '../../app-data-source';
import { Reset } from "../entity/reset.entity";
import { user } from '../entity/user.entity';
import { createTransport } from "nodemailer";
import bcryptjs from 'bcryptjs';



export const ForgotPassword = async (req: Request, res: Response) => {
    const {email} = req.body;
    const token = Math.random().toString(20).substring(2, 12);

    //Get The reset Repository First
    const reset = await myDataSource.getRepository(Reset).save({
        email,
        token
    });
    
    // Create a Transporter

    const transporter = createTransport({
        host: '0.0.0.0',
        port: 1025
    });

    //Generate a Url
    const url =    `http://localhost:3000/reset/${token}`;

    await transporter.sendMail({
        from: 'from@example.com',
        to:email,
        subject: 'Reset Your Password!',
        html: `Click <a href="${url}">here</a> to reset your password!`
    });


    res.send({
        message: 'Please Check your email!'
    });
    //First Test with token
    //res.send(token);
    // res.send(reset);
}

//Resetting the password
export const ResetPassword = async(req: Request, res: Response) => {
    const {token, password, password_confirm} = req.body;

    if(password !== password_confirm){
        return res.status(400).send({
            message: "Password Do Not Match!"
        });
    }

    const resetPassword = await myDataSource.getRepository(Reset).findOneBy({
        "token": token
    });

    if(!resetPassword){
        return res.status(400).send({
            message: "Invalid Link!"
        });
    }

    //res.send(resetPassword);

    const userRepository = myDataSource.getRepository(user);
    const userData = await userRepository.findOne({
        where: {
            email: resetPassword.email
        }
    });

    // res.send(userData);
    
    if(!userData){
        return res.status(400).send({
            message: "User Not Found!"
        });
    }
    await userRepository.update(userData.id, {
        'password': await bcryptjs.hash(password, 12)
    });
    
    res.send({
        message: 'Success'
    });
}


