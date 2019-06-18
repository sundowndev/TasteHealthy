import { reduce, pipe, max, toPairs, head, defaultTo, inc } from 'ramda';

const occurences = reduce(
  (acc, x) => ({
    ...acc,
    [x]: pipe(
      defaultTo(0),
      inc,
    )(acc[x]),
  }),
  Object.create(null),
);

const largestPair = reduce(
  ([k0, v0], [k1, v1]) => {
    const maxVal = max(v0, v1);
    const keyOfLargest = maxVal > v0 ? k1 : k0;
    return [keyOfLargest, maxVal];
  },
  [null, -Infinity],
);

export default pipe(
  occurences,
  toPairs,
  largestPair,
  head,
);
