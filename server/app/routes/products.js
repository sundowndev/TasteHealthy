import express from 'express';

import * as get from './products/get';

const router = new express.Router();

router.route('/').get(get.get_products);

export default router;
