/* eslint-disable no-undef */
/* eslint-disable no-console */

import { connect, client } from '../../../app/db/db.connect';

describe('PRODUCTS REQUEST SCHEMAS', () => {
  beforeAll(() => {
    console.log('before all');

    connect();
  });

  afterAll(() => {
    console.log('after all');
  });

  it('should succeed', () => {
    expect(1).toEqual(1);
  });
});
