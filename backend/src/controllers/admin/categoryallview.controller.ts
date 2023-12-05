import { Request, Response } from 'express';
import CategoryModel from '../../models/admin/categorymodel.model';
export default class CatadminView {
  getCat(req: Request, res: Response) {
   CategoryModel.find()
      .then((catlist) => {
        res.status(200).json(catlist);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error' });
      });
  }
}
