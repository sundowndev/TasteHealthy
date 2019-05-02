import express from 'express';

import * as get from './products/get';
// import * as schema from '../schemas/products';

const router = new express.Router();

// router.route('/search').get(get.get_products_by_keywords);

router.route('/').get(get.get_products);

router.route('/:productId').get(get.get_one_product);

router.route('/:productId/nutrition_facts').get(get.get_one_product_facts);

export default router;
