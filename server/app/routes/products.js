import express from 'express';

import * as get from '@/routes/products/get';
import * as schemas from '@/schemas/products';
import { paginate } from '@/common/pagination';

const router = new express.Router();

router.route('/').get(schemas.get_products, paginate(20), get.get_products);

router.route('/:productId').get(schemas.get_one_product, get.get_one_product);

router
  .route('/:productId/misc_data')
  .get(schemas.get_one_product, get.get_one_product_misc_data);

router
  .route('/:productId/nutrition_facts')
  .get(schemas.get_product_nutrition_facts, get.get_one_product_facts);

export default router;
