import { Request, Response } from 'express';
import CategoryModel from '../../models/admin/categorymodel.model';
import Product, { ProductDocument } from '../../models/admin/productmodel.model' // Correct the path to your product model file

export default class getOneSpecificController {
    async getbyidCategory(req: Request, res: Response) {
        try {
            const category = await CategoryModel.findById(req.params.id);

            if (!category) {
                return res.status(404).json({ error: 'Category not found' });
            }

            // Use populate to retrieve products associated with the category
            const products: ProductDocument[] = await Product.find({ 'categories.categoryId': category._id })
                .populate('categories.categoryId');

            res.status(200).json({
                message: "Products for the category retrieved successfully",
                category: category,
                products: products,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
