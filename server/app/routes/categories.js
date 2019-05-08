import express from 'express';

import * as get from '@/routes/categories/get';
import * as schemas from '@/schemas/categories';
import { paginate } from '@/common/pagination';

const router = new express.Router();

/**
 * @api {get} /categories Fetch all categories
 * @apiName GetCategories
 * @apiGroup Category
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Integer} limit  Lastname of the User.
 * @apiSuccess {Integer} page  Current page.
 * @apiSuccess {Integer} offset  Offset of the request.
 * @apiSuccess {Integer} results  Number of results.
 * @apiSuccess {Array} items  Categories.
 */
router.route('/').get(schemas.get_categories, paginate(20), get.get_categories);

/**
 * @api {get} /categories/:id Fetch one category
 * @apiName GetCategory
 * @apiGroup Category
 *
 * @apiParam  {Integer} id  Category id
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Object} item  Category.
 */
router
  .route('/:categoryId')
  .get(schemas.get_one_category, get.get_one_category);

/**
 * @api {get} /categories/:id/products Fetch products of one category
 * @apiName GetCategoryProducts
 * @apiGroup Category
 *
 * @apiParam  {Integer} id  Category id
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Integer} limit  Lastname of the User.
 * @apiSuccess {Integer} page  Current page.
 * @apiSuccess {Integer} offset  Offset of the request.
 * @apiSuccess {Integer} results  Number of results.
 * @apiSuccess {Array} items  Products.
 */
router
  .route('/:categoryId/products')
  .get(schemas.get_one_category, paginate(20), get.get_products_by_category);

export default router;
