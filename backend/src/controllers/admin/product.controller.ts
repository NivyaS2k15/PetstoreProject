import { Request, Response } from 'express';
import Product from '../../models/admin/productmodel.model';

export default class ProductController {
 


async setProduct (req: Request, res: Response) {
  try {
    const { title,price,categories,amenity3,amenity4,amenity5,amenity6, location, } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!title||!price) {
      return res.status(400).json({ message: "Validation error: Missing required fields or image or check-in/check-out dates" });
    }

   
    const image = files.map((file: Express.Multer.File) => file.filename);

    const createProduct = await Product.create({
      title,
      price,
      categories:categories,
      image,
      
    });

    res.status(201).json({
      message: "product Details Entered Successfully",
      productadd: createProduct,
    });
  } catch (err) {
    console.error('Error creating Hotel:', err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}













 }
