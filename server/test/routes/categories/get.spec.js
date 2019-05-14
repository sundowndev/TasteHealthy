/* eslint-disable max-lines */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import sinon from 'sinon';
import { client } from '@/db/db.connect';
import * as get from '@/routes/categories/get';
// import {
//   products_fields,
//   product_nutrition_facts_fields,
//   product_misc_data_fields,
// } from '@/db/fields/products';
import { categories_fields } from '@/db/fields/categories';
// import * as msg from '@/errors/message_errors.js';

describe('CATEGORIES ROUTES -- GET', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('GET / -- get_categories', () => {
    it('should succeed', () => {
      const req = {
        query: {},
        limit: 20,
        offset: 0,
      };

      sinon.stub(client, 'query').callsFake(function fakeFn(query, params) {
        const expectedQuery = `SELECT
        ${categories_fields.join(',')}
        FROM categories ORDER BY id DESC LIMIT ${req.limit} OFFSET
        ${req.offset}`;

        expect(query).toBe(expectedQuery);
        expect(params).toEqual([]);

        return Promise.resolve({
          rows: [{ id: 1 }, { id: 2 }],
        });
      });

      get.get_categories(req, {}, (err) => {
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
        return Promise.reject('test1');
      });

      get.get_categories(req, {}, (err) => {
        expect(err).toEqual({ message: 'test1', status: 500 });
      });
    });
  });
});
