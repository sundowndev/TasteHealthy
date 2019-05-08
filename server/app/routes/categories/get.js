import { client } from '@/db/db.connect';
import * as msg from '@/errors/message_errors.js';

const categories_fields = ['id', 'name'];
const products_fields = [
  'id',
  'url',
  'created_datetime',
  'last_modified_datetime',
  'product_name',
  'generic_name',
  'quantity',
  'image_url',
  'category',
  'origins',
  'packaging',
  'manufacturing_places',
  'traces',
  'countries',
  'labels',
  'purchase_places',
  'stores',
  'ingredients_text',
];

export const get_categories = (req, res, next) => {
  let query = null;
  let params = [];

  query = `SELECT
    ${categories_fields.join(',')}
    FROM categories ORDER BY id DESC LIMIT ${req.limit} OFFSET ${req.offset}`;

  client
    .query(query, params)
    .then((res) => {
      req.results = res.rows.length;
      req.return = res.rows || [];
    })
    .then(next)
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_category = (req, res, next) => {
  client
    .query(
      `SELECT ${categories_fields.join(',')} FROM categories WHERE id = $1`,
      [req.params.categoryId],
    )
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.categoryNotFound());
      }

      req.return = res.rows[0] || {};
    })
    .then(next)
    .catch((error) => next(msg.errorApi(error)));
};

export const get_products_by_category = (req, res, next) => {
  client
    .query(
      `SELECT ${products_fields.join(
        ',',
      )} FROM products WHERE category = $1 ORDER BY id DESC LIMIT ${
        req.limit
      } OFFSET ${req.offset}`,
      [req.params.categoryId],
    )
    .then((res) => {
      req.results = res.rows.length;
      req.return = res.rows || [];
    })
    .then(next)
    .catch((error) => next(msg.errorApi(error)));
};
