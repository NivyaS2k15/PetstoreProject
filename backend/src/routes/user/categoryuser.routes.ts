import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
 import getOneSpecificController from '../../controllers/user/getonecategories.controller';
 
class categoryuserroutes {
  router = Router();

 oneCategory =new getOneSpecificController();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    //this.router.get('/usercategory',userAuthenticateMiddleware,uploadMiddleware.array("image",10),this.categoriesviewalluser.getCategory);
    this.router.get('/:id',uploadMiddleware.array("image",10), this.oneCategory.getbyidCategory);

  }
}
 
export default new categoryuserroutes().router;