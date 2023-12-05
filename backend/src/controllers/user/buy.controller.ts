import { Request, Response } from "express";
import Buy from "../../models/user/buynow.model";
import mongoose from 'mongoose';
export default class BuynowController {
    async createBuyow(req: Request, res: Response) {
        try{
            const{name,address,state,district,pin}=req.body;

        const newBuy = await Buy.create({name,address,state,district,pin});
        console.log('buynow saved',newBuy);
        res.status(201).json({
            message: "details created",
            
            Buynoww:newBuy,

        });


        }catch(err){
            console.error('Error creating contact',err);
            res.status(500).json({
                message:"internal server error"
            });
        }
        
        }

        async findBUYnowAll(req: Request, res: Response) {
            const BuyData = await Buy.find({}).exec();
            res.send(BuyData);
            console.log(BuyData);
          }

        


      
    }

