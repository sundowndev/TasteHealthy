/* eslint-disable no-undef */
/* eslint-disable no-console */

// import { connect, client } from '../../../app/db/db.connect';
import * as schema from '../../app/schemas/products';

describe('PRODUCTS ROUTES -- GET', () => {
  beforeAll(() => {
    console.log('before all');
  });

  afterAll(() => {
    console.log('after all');
  });

  it('should succeed', () => {
    const req = {};

    schema.get_products(req, {}, () => {
      expect(1).toEqual(1);
    });
  });
});
