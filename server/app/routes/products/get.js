import { client } from '@/db/db.connect';
import * as msg from '@/errors/message_errors.js';
import {
  products_fields,
  product_nutrition_facts_fields,
  product_misc_data_fields,
} from '@/db/fields/products';

export const get_products = (req, res, next) => {
  let query = null;
  let params = [];

  if (req.query.query) {
    query = `SELECT ${products_fields.join(
      ',',
    )} FROM products WHERE to_tsvector(product_name) @@ to_tsquery($1) LIMIT ${
      req.limit
    } OFFSET ${req.offset}`;
    params = [req.query.query];
  } else {
    query = `SELECT ${products_fields.join(
      ',',
    )} FROM products ORDER BY id DESC LIMIT ${req.limit} OFFSET ${req.offset}`;
  }

  client
    .query(query, params)
    .then((res) => {
      req.results = res.rows.length;
      req.return = res.rows;

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_product = (req, res, next) => {
  client
    .query(`SELECT ${products_fields.join(',')} FROM products WHERE id = $1`, [
      req.params.productId,
    ])
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.productNotFound());
      }

      req.return = res.rows[0];

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_product_facts = (req, res, next) => {
  client
    .query(
      `SELECT ${product_nutrition_facts_fields.join(
        ',',
      )} FROM product_nutrition_facts WHERE product_id = $1`,
      [req.params.productId],
    )
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.productNotFound());
      }

      req.return = res.rows[0];

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};

export const get_one_product_misc_data = (req, res, next) => {
  client
    .query(
      `SELECT ${product_misc_data_fields.join(
        ',',
      )} FROM product_misc_data WHERE product_id = $1`,
      [req.params.productId],
    )
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.productNotFound());
      }

      req.return = res.rows[0];

      return next();
    })
    .catch((error) => next(msg.errorApi(error)));
};
