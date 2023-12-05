import { Request, Response } from 'express';
import Buy from '../../models/user/buynow.model';
export default class buygetbyidController {
    async getbyidbuy(req: Request, res: Response) {
        try {
            const buy= await Buy.findById(req.params.id);

            if (!buy) {
                res.status(404).json({ error: ' not found' });
            } else {
                res.status(200).json({
                    message: " single details get  Successfully",
                    getoneproduct: buy,
                  });
            }
        } catch (error) {
            res.status(500).json({ error: "error"});
        }
    }
}
