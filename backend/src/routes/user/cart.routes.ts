import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
import CartController from '../../controllers/user/cart.controller';
import cartusergetbyidController from '../../controllers/user/cartview.contoller';
import CartUserController from '../../controllers/user/cartsingleuser.controller';
import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
import CarputController from '../../controllers/user/cartput.controller';

 
class CartRoutes {
  router = Router();

 cartget = new CartController();
 cartview =new cartusergetbyidController();
 singleuserid = new CartUserController();
 putcartview = new CarputController

   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/',userAuthenticateMiddleware,this.cartget.createCart);
    this.router.get('/viewcart',this.cartview.findAll)
    this.router.get('/:Id',userAuthenticateMiddleware,this.singleuserid.findByUserId)
    // this.router.put('/:Id',userAuthenticateMiddleware,this.putcartview.updateCart)

  }
}
 
export default new CartRoutes().router;