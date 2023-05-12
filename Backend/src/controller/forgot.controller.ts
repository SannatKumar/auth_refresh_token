import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { myDataSource } from '../../app-data-source';
import { Reset } from "../entity/reset.entity";
import { createTransport } from "nodemailer";



export const Forgot = async (req: Request, res: Response) => {
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
