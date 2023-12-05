// import { Request, Response } from 'express';
// import CategoryModel,{ICategory}  from '../../models/admin/categorymodel.model';
// import Product, { ProductDocument} from '../../models/admin/productmodel.model';
 
// export default class ViewPro {
//   async findview (req: Request, res: Response) {
//     try {
//       const hotelData: ProductDocument[] = await Product.find({}).populate({
//         path: 'categories',
//         model: CategoryModel,
//       }).exec();
 
//       // Map through hotelData and calculate the total price
     
 
     
 
      
//     } catch (error) {
//       console.error('Error finding products:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
// }
import { Request, Response } from 'express';
import CategoryModel, { ICategory } from '../../models/admin/categorymodel.model';
import Product, { ProductDocument } from '../../models/admin/productmodel.model';

export default class ViewPro {
  async findview(req: Request, res: Response) {
    try {
      const productData: ProductDocument[] = await Product.find({})
        .populate('categories.categoryId') // Use 'categories.categoryId' to match the schema
        .exec();

      // Map through productData and perform any additional operations if needed

      res.json(productData);
    } catch (error) {
      console.error('Error finding products:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
