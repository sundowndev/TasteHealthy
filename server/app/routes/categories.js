import express from 'express';

import * as get from '@/routes/categories/get';
import * as schemas from '@/schemas/categories';
import { paginate } from '@/common/pagination';

const router = new express.Router();

router.route('/').get(schemas.get_categories, paginate(20), get.get_categories);

router
  .route('/:categoryId')
  .get(schemas.get_one_category, get.get_one_category);

router
  .route('/:categoryId/products')
  .get(
    schemas.get_one_category,
    paginate(20),
    get.get_products_by_category,
  );

export default router;
