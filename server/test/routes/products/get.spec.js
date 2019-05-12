/* eslint-disable max-lines */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import sinon from 'sinon';
import { client } from '@/db/db.connect';
import * as get from '@/routes/products/get';
import {
  products_fields,
  product_nutrition_facts_fields,
  product_misc_data_fields,
} from '@/db/fields/products';
import * as msg from '@/errors/message_errors.js';

describe('PRODUCTS ROUTES -- GET', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('GET / -- get_products', () => {
    it('should succeed without query', () => {
      const req = {
        query: {},
        limit: 20,
        offset: 0,
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${products_fields.join(
          ',',
        )} FROM products ORDER BY id DESC LIMIT ${req.limit} OFFSET ${
          req.offset
        }`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([]);

        return Promise.resolve({
          rows: [{ id: 1 }],
        });
      });

      get.get_products(req, {}, (err) => {
        expect(req.results).toEqual(1);
        expect(req.return).toEqual([{ id: 1 }]);
        expect(err).toEqual(undefined);
      });
    });

    it('should succeed with query', () => {
      const req = {
        query: {
          query: 'nutella',
        },
        limit: 40,
        offset: 60,
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${products_fields.join(
          ',',
        )} FROM products WHERE to_tsvector(product_name) @@ to_tsquery($1) LIMIT ${
          req.limit
        } OFFSET ${req.offset}`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual(['nutella']);

        return Promise.resolve({
          rows: [{ id: 1 }, { id: 2 }],
        });
      });

      get.get_products(req, {}, (err) => {
        expect(req.results).toEqual(2);
        expect(req.return).toEqual([{ id: 1 }, { id: 2 }]);
        expect(err).toEqual(undefined);
      });
    });

    it('should handle error', () => {
      const req = {
        query: {},
        limit: 40,
        offset: 60,
      };

      sinon.stub(client, 'query').callsFake(function fakeFn() {
        return Promise.reject('test');
      });

      get.get_products(req, {}, (err) => {
        expect(err).toEqual({ message: 'test', status: 500 });
      });
    });
  });

  describe('GET /:productId -- get_one_product', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should find one product', () => {
      const req = {
        params: {
          productId: 1,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${products_fields.join(
          ',',
        )} FROM products WHERE id = $1`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([req.params.productId]);

        return Promise.resolve({
          rows: [{ id: 1 }],
        });
      });

      get.get_one_product(req, {}, (err) => {
        expect(req.return).toEqual({ id: 1 });
        expect(err).toEqual(undefined);
      });
    });

    it('should return not found', () => {
      const req = {
        params: {
          productId: 5,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${products_fields.join(
          ',',
        )} FROM products WHERE id = $1`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([req.params.productId]);

        return Promise.resolve({
          rows: [],
        });
      });

      get.get_one_product(req, {}, (err) => {
        expect(err).toEqual(msg.productNotFound());
      });
    });

    it('should handle error', () => {
      const req = {
        params: {
          productId: 5,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn() {
        return Promise.reject();
      });

      get.get_one_product(req, {}, (err) => {
        expect(err).toEqual(msg.errorApi());
      });
    });
  });

  describe('GET /:productId/product_facts -- get_one_product_facts', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should fetch product facts', () => {
      const req = {
        params: {
          productId: 1,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${product_nutrition_facts_fields.join(
          ',',
        )} FROM product_nutrition_facts WHERE product_id = $1`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([req.params.productId]);

        return Promise.resolve({
          rows: [{ product_id: 1 }],
        });
      });

      get.get_one_product_facts(req, {}, (err) => {
        expect(req.return).toEqual({ product_id: 1 });
        expect(err).toEqual(undefined);
      });
    });

    it('should return not found', () => {
      const req = {
        params: {
          productId: 5,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${product_nutrition_facts_fields.join(
          ',',
        )} FROM product_nutrition_facts WHERE product_id = $1`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([req.params.productId]);

        return Promise.resolve({
          rows: [],
        });
      });

      get.get_one_product_facts(req, {}, (err) => {
        expect(err).toEqual(msg.productNotFound());
      });
    });

    it('should handle error', () => {
      const req = {
        params: {
          productId: 5,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn() {
        return Promise.reject();
      });

      get.get_one_product_facts(req, {}, (err) => {
        expect(err).toEqual(msg.errorApi());
      });
    });
  });

  describe('GET /:productId/misc_data -- get_one_product_misc_data', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should fetch product facts', () => {
      const req = {
        params: {
          productId: 1,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${product_misc_data_fields.join(
          ',',
        )} FROM product_misc_data WHERE product_id = $1`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([req.params.productId]);

        return Promise.resolve({
          rows: [{ product_id: 1 }],
        });
      });

      get.get_one_product_misc_data(req, {}, (err) => {
        expect(req.return).toEqual({ product_id: 1 });
        expect(err).toEqual(undefined);
      });
    });

    it('should return not found', () => {
      const req = {
        params: {
          productId: 5,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT ${product_misc_data_fields.join(
          ',',
        )} FROM product_misc_data WHERE product_id = $1`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([req.params.productId]);

        return Promise.resolve({
          rows: [],
        });
      });

      get.get_one_product_misc_data(req, {}, (err) => {
        expect(err).toEqual(msg.productNotFound());
      });
    });

    it('should handle error', () => {
      const req = {
        params: {
          productId: 5,
        },
      };

      sinon.stub(client, 'query').callsFake(function fakeFn() {
        return Promise.reject();
      });

      get.get_one_product_misc_data(req, {}, (err) => {
        expect(err).toEqual(msg.errorApi());
      });
    });
  });
});
