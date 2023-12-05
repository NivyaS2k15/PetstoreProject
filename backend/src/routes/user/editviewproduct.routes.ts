import { Router } from 'express';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
 import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
 import  ViewPro from '../../controllers/user/viewproduct';

class editproductview {
  router = Router();
 
 editview = new ViewPro();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial

    this.router.get('/',uploadMiddleware.array("image",10),this.editview.findview);

  }
}
 
export default new editproductview().router;