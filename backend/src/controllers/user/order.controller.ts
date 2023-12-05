import { Request, Response } from 'express';
import Cart from '../../models/user/cart.model';
import Order from '../../models/user/order.model';
import mongoose, { Schema } from 'mongoose';
import Product from '../../models/admin/productmodel.model';


export default class OrderController {
    async fetchCart(req: Request, res: Response) {
        try {
            const carts = await Cart.find({}, 'products').exec();
            const cartItems: object[] = carts.map((cartData) => ({
                userId: cartData.userId,
                products: cartData.products.map((products) => ({
                    productId: products.productId,
                    quantity: products.quantity,
                })),
              
            }));
            res.status(200).json(cartItems);
        } catch (error) {
            console.error('Error fetching cart:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async retrieveProduct(productId: mongoose.Types.ObjectId, res: Response) {
        try {
            const productData = await Product.findById(productId).exec();
            if (productData) {
                return {
                    title: productData.title,
                    
                };
            }
            return null;
        } catch (error) {
            console.error('Error retrieving product:', error);
            res.status(500).json({ message: 'Internal Server Error' });
            return null;
        }
    }

    

    async createOrder(req: any, res: Response) {
        try {
            // const { cartData } = req.body;
            const userId = req.userData.userId;
            let cartData=await Cart.find({ userId: new mongoose.Types.ObjectId(userId)}).populate({
                path: 'products.productId',
                model: Product,
            }).exec();
            console.log({cartData});
            // call all the collections apis and create the data
            const newOrder = Order.create(cartData).then((OrderData)=>{
                res.status(201).json({
                    message: 'Order created successfully',
                    order: OrderData
                });
            }).catch((ex)=>{
                res.status(500).json({
                    message: 'Failed to order',
                    order: ex
                });
            });
          
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}



// import { Request, Response } from 'express';
// import Cart from '../../models/user/cart.model';
// import Order from '../../models/user/order.model';
// import mongoose, { Schema } from 'mongoose';
// import Product from '../../models/admin/productmodel.model';


// export default class OrderController {
//     async fetchCart(req: Request, res: Response) {
//         try {
//             const carts = await Cart.find({}, 'products').exec();
//             const cartItems: object[] = carts.map((cartData) => ({
//                 userId: cartData.userId,
//                 products: cartData.products.map((products) => ({
//                     productId: products.productId,
//                     quantity: products.quantity,
//                 })),
              
//             }));
//             res.status(200).json(cartItems);
//         } catch (error) {
//             console.error('Error fetching cart:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     }

//     async retrieveHotel(productId: mongoose.Types.ObjectId, res: Response) {
//         try {
//             const productData = await Product.findById(productId).exec();
//             if (productData) {
//                 return {
//                     title: productData.title,
                    
//                 };
//             }
//             return null;
//         } catch (error) {
//             console.error('Error retrieving hotel:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//             return null;
//         }
//     }

//     // create a new order from the cart data and the user data
//     async createOrder(req: any, res: Response) {
//         try {
//             // get the user id from the request
//             const userId = req.userData.userId;
//             // find the cart data for the user
//             let cartData=await Cart.findOne({ userId:new mongoose.Types.ObjectId(userId)}).populate({
//                 path: 'products.productId',
//                 model: Product,
//             }).exec();
//             console.log({cartData});
//             // check if the cart is not empty
//             if (cartData && cartData.products.length > 0) {
//                 // create a new order object
//                 let order = new Order({
//                     userId: userId,
//                     products: cartData.products.map(product => ({
//                         productId: product.productId,
//                         title: product.productId,
//                         quantity: product.quantity,
//                         price: product.productId,
//                     })),
//                 });
//                 // save the order to the database
//                 await order.save();
//                 // clear the cart for the user
//                 await Cart.findOneAndDelete({ userId:mongoose.Types.ObjectId});
//                 // send a success response with the order details
//                 res.status(201).json(order);
//             } else {
//                 // send a bad request response if the cart is empty
//                 res.status(400).json({ message: 'Cart is empty' });
//             }
            
//         } catch (error) {
//             console.error('Error creating order:', error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     }
// }