import { client } from '@/db/db.connect';
import * as msg from '@/errors/message_errors.js';
import { categories_fields } from '@/db/fields/categories';
import { products_fields } from '@/db/fields/products';

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
