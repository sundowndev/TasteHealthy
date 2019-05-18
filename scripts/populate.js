/* eslint-disable no-console */
/* eslint-disable max-lines */
import csv from 'csvtojson';
import models from '../server/app/db/models';

// ---------------- Variables ----------------
// const csvFilePath = path.join(process.cwd(), './scripts/test2.csv');
const csvFilePath =
  '/home/sundowndev/Téléchargements/fr.openfoodfacts.org.products.csv';

// ---------------- Functions & script ----------------
const logger = (...args) => console.log(...args);

async function main() {
  let productId = null;
  let defaultCategoryId = null;

  await models.Categories.create({ name: 'Inconnue' })
    .then(doc => {
      defaultCategoryId = doc.id;
    })
    .catch(error => {
      throw new Error(error);
    });

  csv(
    {
      output: 'json',
      maxRowLength: 65535,
      fork: true,
      delimiter: '	',
    },
    {},
  )
    .fromFile(csvFilePath)
    .subscribe(
      (doc, lineNumber) =>
        new Promise((resolve, reject) => {
          const promises = [];

          if (
            doc['product_name'] === '' ||
            doc['main_category_fr'] === '' ||
            // doc['main_category_fr'].indexOf(':') === 2 ||
            doc['countries_fr'] === '' ||
            // doc['labels_fr'] === '' ||
            doc['origins'] === '' ||
            doc['manufacturing_places'] === '' ||
            doc['purchase_places'] === '' ||
            doc['energy_100g'] === '' ||
            doc['serving_size'] === '' ||
            // doc['no_nutriments'] === '' ||
            doc['additives_n'] === '' ||
            doc['additives'] === '' ||
            // doc['ingredients_from_palm_oil_n'] === '' ||
            // doc['ingredients_from_palm_oil'] === '' ||
            doc['nutrition_grade_fr'] === '' ||
            // doc['carbon-footprint_100g'] === '' ||
            doc['nutrition-score-fr_100g'] === '' ||
            doc['nutrition-score-uk_100g'] === ''
          ) {
            return reject();
          }

          promises.push(
            models.Categories.findOrCreate({
              where: {
                name: doc.main_category_fr,
              },
              defaults: { name: doc.main_category_fr },
            }).then(cat => {
              doc.categoryId = cat[0].id;

              logger(`New Category: ${cat[0].name} (id:${cat.categoryId}) `);
            }),
          );

          Promise.all(promises)
            .then(() => {
              resolve(doc);
            })
            .catch(error => {
              throw new Error(error);
            });
        }).then(
          doc =>
            new Promise((resolve, reject) => {
              const promises = [];

              // console.log(
              //   1111111111,
              //   doc['serving_size'],
              //   doc['carbon_footprint_100g'],
              //   doc['nutrition_score_fr_100g'],
              // doc['nutrition_score_uk_100g'],
              // doc['quantity'],
              // doc['image_url'],
              // doc['origins'],
              // doc['packaging'],
              // doc['manufacturing_places'],
              // doc['traces_fr'],
              // doc['countries_fr'],
              // doc['labels_fr'],
              // doc['purchase_places'],
              // doc['stores'],
              // doc['ingredients_text'],
              // );

              promises.push(
                models.Products.create({
                  categoryId: doc['categoryId'] || defaultCategoryId,
                  product_name: doc['product_name'],
                  generic_name: doc['generic_name'],
                  quantity: doc['quantity'],
                  image_url: doc['image_url'],
                  origins: doc['origins'],
                  packaging: doc['packaging_tags'],
                  manufacturing_places: doc['manufacturing_places'],
                  traces: doc['traces_fr'],
                  countries: doc['countries_fr'],
                  labels: doc['labels_fr'],
                  purchase_places: doc['purchase_places'],
                  stores: doc['stores'],
                  ingredients_text: doc['ingredients_text'],
                })
                  .then(doc => {
                    productId = doc.id;

                    logger(
                      `New product: ${doc.product_name ||
                        null} (id ${productId}/${lineNumber})`,
                    );
                  })
                  .then(() =>
                    models.Facts.create({
                      productId,
                      energy_100g: doc['energy_100g'],
                      energy: doc['energy'],
                      fat_100g: doc['fat_100g'],
                      saturated: doc['saturated'],
                      trans: doc['trans'],
                      cholesterol_100g: doc['cholesterol_100g'],
                      carbohydrates_100g: doc['carbohydrates_100g'],
                      sugars_100g: doc['sugars_100g'],
                      sucrose_100g: doc['sucrose_100g'],
                      glucose_100g: doc['glucose_100g'],
                      fructose_100g: doc['fructose_100g'],
                      lactose_100g: doc['lactose_100g'],
                      fiber_100g: doc['fiber_100g'],
                      proteins_100g: doc['proteins_100g'],
                      casein_100g: doc['casein_100g'],
                      serum: doc['serum'],
                      nucleotides_100g: doc['nucleotides_100g'],
                      salt_100g: doc['salt_100g'],
                      sodium_100g: doc['sodium_100g'],
                      alcohol_100g: doc['alcohol_100g'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      vitamin: doc['vitamin'],
                      potassium_100g: doc['potassium_100g'],
                      chloride_100g: doc['chloride_100g'],
                      calcium_100g: doc['calcium_100g'],
                      magnesium_100g: doc['magnesium_100g'],
                      caffeine_100g: doc['caffeine_100g'],
                      taurine_100g: doc['taurine_100g'],
                      ph_100g: doc['ph_100g'],
                      fruits: doc['fruits'],
                      fruits: doc['fruits'],
                      fruits: doc['fruits'],
                      collagen: doc['collagen'],
                      cocoa_100g: doc['cocoa_100g'],
                      chlorophyl_100g: doc['chlorophyl_100g'],
                      carbon: doc['carbon'],
                      carbon: doc['carbon'],
                      nutrition: doc['nutrition'],
                      nutrition: doc['nutrition'],
                      glycemic: doc['glycemic'],
                      water: doc['water'],
                      choline_100g: doc['choline_100g'],
                      phylloquinone_100g: doc['phylloquinone_100g'],
                      beta: doc['beta'],
                      inositol_100g: doc['inositol_100g'],
                      bicarbonate_100g: doc['bicarbonate_100g'],
                      carnitine_100g: doc['carnitine_100g'],
                    }),
                  )
                  .then(() =>
                    models.MiscData.create({
                      productId,
                      serving_size_g: doc['serving_size'],
                      no_nutriments: doc['no_nutriments'],
                      additives_n: parseInt(doc['additives_n'], 10),
                      additives: doc['additives'],
                      ingredients_from_palm_oil_n: parseInt(
                        doc['ingredients_from_palm_oil_n'],
                      ),
                      ingredients_from_palm_oil:
                        doc['ingredients_from_palm_oil'],
                      nutrition_grade_fr: doc['nutrition_grade_fr'],
                      main_category_fr: doc['main_category_fr'],
                      carbon_footprint_100g: doc['carbon-footprint_100g'],
                      nutrition_score_fr_100g: doc['nutrition-score-fr_100g'],
                      nutrition_score_uk_100g: doc['nutrition-score-uk_100g'],
                    }),
                  )
                  .catch(error => {
                    throw new Error(error);
                  }),
              );

              Promise.all(promises)
                .then(() => {
                  resolve(doc);
                })
                .catch(error => {
                  console.error(error);
                });
            }),
        ),
      error => {
        throw new Error(error);
      },
      () => {
        logger('Done.');
        process.exit();
      },
    );
}

models.sequelize.sync({ force: true }).then(main);
