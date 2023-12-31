import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
import ProductuserveiwController from '../../controllers/user/allproductuserview.controller';
import ProductgetbyidController from '../../controllers/user/getoneproduct.controller';
 import SearchController from '../../controllers/user/search.controller'; 
 import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
 import  ViewPro from '../../controllers/user/viewproduct';

class productuserroutes {
  router = Router();
 productviewsss = new ProductuserveiwController();
 productoneproductview = new ProductgetbyidController();
 searchview = new SearchController();
 editview = new ViewPro();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.get('/all',userAuthenticateMiddleware,uploadMiddleware.array("image",10),this.productviewsss.getProducts);
    this.router.get('/:id' ,uploadMiddleware.array("image",10), this.productoneproductview.getbyidProduct);
    this.router.get('/', uploadMiddleware.array("image",10),this.searchview.searchTasks);
    this.router.get('/',uploadMiddleware.array("image",10),this.editview.findview);

  }
}
 
export default new productuserroutes().router;