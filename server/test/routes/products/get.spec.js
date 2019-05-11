/* eslint-disable no-undef */
/* eslint-disable no-console */

import sinon from 'sinon';
import { client } from '@/db/db.connect';
import * as get from '@/routes/products/get';
import {
  products_fields,
  // product_nutrition_facts_fields,
  // product_misc_data_fields,
} from '@/db/fields/products';

describe('PRODUCTS ROUTES -- GET', () => {
  let dbClient;

  beforeEach(() => {
    dbClient = sinon.stub(client, 'query');
  });

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

      dbClient.callsFake(function fakeFn(query, params) {
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

      dbClient.callsFake(function fakeFn(query, params) {
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

    it('should throw error', () => {
      // const req = {
      //   query: {
      //     query: 'nutella',
      //   },
      //   limit: 40,
      //   offset: 60,
      // };
      // sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
      //   const expectedQuery = `SELECT ${products_fields.join(
      //     ',',
      //   )} FROM products WHERE to_tsvector(product_name) @@ to_tsquery($1) LIMIT ${
      //     req.limit
      //   } OFFSET ${req.offset}`;
      //   expect(query).toBe(expectedQuery);
      //   expect(params).toEqual(['nutella']);
      //   return Promise.resolve({
      //     rows: [{ id: 1 }, { id: 2 }],
      //   });
      // });
      // get.get_products(req, {}, (err) => {
      //   expect(req.results).toEqual(2);
      //   expect(req.return).toEqual([{ id: 1 }, { id: 2 }]);
      //   expect(err).toEqual(undefined);
      // });
    });
  });
});
