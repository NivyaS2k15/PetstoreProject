import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import  CategoryController from '../../controllers/admin/categorycontroller.controller';
import categoryDelete from '../../controllers/admin/categorydelete.controller';
 import CatadminView from '../../controllers/admin/categoryallview.controller';
class categoryRoutes {
  router = Router();
 categorycreatecontroller= new CategoryController();
 categorydeletecontroller = new categoryDelete();
   catview =new CatadminView();
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/', adminAuthenticateMiddleware,this.categorycreatecontroller.addCategory);
    this.router.delete('/:id', adminAuthenticateMiddleware,this.categorydeletecontroller.catdelete);
    this.router.get('/get', adminAuthenticateMiddleware,this.catview.getCat);

  }
}
 
export default new categoryRoutes().router;