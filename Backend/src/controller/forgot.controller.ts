import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { myDataSource } from '../../app-data-source';
import { Reset } from "../entity/reset.entity";

export const Forgot = async (req: Request, res: Response) => {
    const {email} = req.body;
    const token = Math.random().toString(20).substring(2, 12);

    //Get The reset Repository First
    const reset = await myDataSource.getRepository(Reset).save({
        email,
        token
    });
    
    //First Test with token
    //res.send(token);
    res.send(reset);
}
