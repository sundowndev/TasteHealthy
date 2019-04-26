const csv = require('csvtojson');
// const csvFilePath =
  // '/home/sundowndev/Téléchargements/fr.openfoodfacts.org.products.csv';
const csvFilePath = './scripts/test.csv';

csv(
  {
    output: 'json',
    maxRowLength: 65535,
    fork: true,
  },
  {},
)
  .fromFile(csvFilePath)
  .subscribe(
    (json, lineNumber) =>
      new Promise((resolve, reject) => {
        if (lineNumber > 10000) {
          return reject('ok');
        }

        console.log(`Processing line ${lineNumber}`, json);

        return resolve();
      }),
    (error) => {
      throw new Error(error);
    },
    () => {
      console.log('Done.');
    },
  );
