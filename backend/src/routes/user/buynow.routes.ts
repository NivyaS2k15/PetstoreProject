import { Router } from 'express';
import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
 import BuynowController from '../../controllers/user/buy.controller';
 import buygetbyidController from '../../controllers/user/buygetbyid.controller';
class Buynowroutes {
  router = Router();

 buynow = new BuynowController();
 buyid = new buygetbyidController();
 
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/",userAuthenticateMiddleware,this.buynow.createBuyow);
    this.router.get("/getbuy", this.buynow.findBUYnowAll);
    this.router.get('/:id',this.buyid.getbyidbuy);

  }
}
 
export default new Buynowroutes().router;