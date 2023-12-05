import { Request, Response } from 'express';
import Cart from '../../models/user/cart.model';
import Product from '../../models/admin/productmodel.model';

export default class CartUserController {

    async findByUserId(req: Request, res: Response) {
        try {
            const { userId } = req.params;

            console.log('Received userId:', userId);

            // Assuming there is a 'userId' field in your Cart model
            const cartData = await Cart.findOne({ userId: userId }).populate({
                path: 'products.productId',
                model: Product,
            });

            console.log('Retrieved cartData:', cartData);

            if (!cartData) {
                return res.status(404).json({ message: 'Cart not found for the specified user' });
            }

            res.status(200).json(cartData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
