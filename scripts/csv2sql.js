const path = require('path');
const csv = require('csvtojson');
// const csvFilePath =
// '/home/sundowndev/Téléchargements/fr.openfoodfacts.org.products.csv';
const csvFilePath = path.join(process.cwd(), './scripts/test2.csv');

csv(
  {
    output: 'json',
    maxRowLength: 65535,
    fork: true,
    delimiter: ',',
  },
  {},
)
  .fromFile(csvFilePath)
  .subscribe(
    (doc, lineNumber) =>
      new Promise((resolve, reject) => {
        if (doc.product_name === '') {
          return resolve();
        }

        console.log(
          `Processing line ${lineNumber} --`,
          doc.product_name || null,
        );

        return resolve();
      }),
    (error) => {
      throw new Error(error);
    },
    () => {
      console.log('Done.');
    },
  );
