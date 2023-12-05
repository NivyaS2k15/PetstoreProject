import { Request, Response } from 'express';
import Cart from '../../models/user/cart.model';
import Product from '../../models/admin/productmodel.model';

export default class CarputController {

  

    async updateCart(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const { products } = req.body;

            console.log('Received userId:', userId);
            console.log('Received products:', products);

            // Assuming there is a 'userId' field in your Cart model
            let cart = await Cart.findOne({ userId });

            if (!cart) {
                return res.status(404).json({ message: 'Cart not found for the specified user' });
            }

            // Update the cart's products
            cart.products = products;

            // Save the updated cart
            cart = await cart.save();

            // Populate the products for response
            await cart.populate({
                path: 'products.productId',
                model: Product,
            });

            res.status(200).json(cart);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
