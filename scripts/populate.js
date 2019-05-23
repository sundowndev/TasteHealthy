/* eslint-disable no-console */
/* eslint-disable max-lines */
import path from 'path';
import csv from 'csvtojson';
import models from '../server/app/db/models';

// ---------------- Variables ----------------
// const csvFilePath = path.join(process.cwd(), './scripts/fixtures/data.csv');
const csvFilePath =
  '/home/sundowndev/Téléchargements/fr.openfoodfacts.org.products.csv';

// ---------------- Functions & script ----------------
const logger = (...args) => console.log(...args);

let countCategories = 0;
let countProducts = 0;

async function main() {
  let productId = null;
  let defaultCategoryId = null;

  await models.Categories.create({ name: 'Inconnue' })
    .then(doc => {
      defaultCategoryId = doc.id;
      countCategories++;
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

          Object.keys(doc).map(k => {
            doc[k] =
              doc[k] === '' || doc[k] === ' ' || doc[k] === undefined
                ? null
                : doc[k];
          });

          if (
            !doc['product_name'] ||
            !doc['main_category_fr'] ||
            // doc['main_category_fr'].indexOf(':') === 2 ||
            // !doc['countries_fr'] ||
            !doc['labels_fr'] ||
            // !doc['origins'] ||
            !doc['manufacturing_places'] ||
            !doc['purchase_places'] ||
            !doc['energy_100g'] ||
            !doc['serving_size'] ||
            !doc['packaging'] ||
            // !doc['additives_n'] ||
            // !doc['additives'] ||
            !doc['quantity'] ||
            // !doc['ingredients_from_palm_oil']' ||
            !doc['nutrition_grade_fr'] ||
            // !doc['carbon-footprint_100g'] ||
            !doc['nutrition-score-fr_100g'] ||
            !doc['nutrition-score-uk_100g']
          ) {
            return reject();
          }

          if (doc.main_category_fr.indexOf(':') < 0) {
            promises.push(
              models.Categories.findOrCreate({
                where: {
                  name: doc.main_category_fr,
                },
                defaults: { name: doc.main_category_fr },
              }).spread((cat, created) => {
                doc.categoryId = cat.id;

                if (created) {
                  logger(
                    `Created category: ${cat.name} (id:${doc.categoryId}) `,
                  );
                  countCategories++;
                }
              }),
            );
          }

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

              let quantity = doc['quantity'].replace(',', '.');
              let quantity_unity = doc['quantity'].replace(/([0-9])\w+ /, '');

              if (doc['quantity'].indexOf('g') > -1) quantity_unity = 'g';
              else if (doc['quantity'].indexOf('l') > -1) quantity_unity = 'L';
              else if (doc['quantity'].indexOf('cl') > -1)
                quantity_unity = 'cl';
              else if (doc['quantity'].indexOf('ml') > -1)
                quantity_unity = 'ml';
              else if (doc['quantity'].indexOf('oz') > -1)
                quantity_unity = 'OZ';
              else return reject();

              let nutrition_facts = {
                energy_100g: doc['energy_100g'],
                energy_from_fat_100g: doc['energy-from-fat_100g'],
                fat_100g: doc['fat_100g'],
                saturated_fat_100g: doc['saturated-fat_100g'],
                trans_fat_100g: doc['trans-fat_100g'],
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
                serum_proteins_100g: doc['serum-proteins_100g'],
                nucleotides_100g: doc['nucleotides_100g'],
                salt_100g: doc['salt_100g'],
                sodium_100g: doc['sodium_100g'],
                alcohol_100g: doc['alcohol_100g'],
                vitamin_a_100g: doc['vitamin-a_100g'],
                vitamin_d_100g: doc['vitamin-d_100g'],
                vitamin_e_100g: doc['vitamin-e_100g'],
                vitamin_k_100g: doc['vitamin-k_100g'],
                vitamin_c_100g: doc['vitamin-c_100g'],
                vitamin_b1_100g: doc['vitamin-b1_100g'],
                vitamin_b2_100g: doc['vitamin-b2_100g'],
                vitamin_pp_100g: doc['vitamin-pp_100g'],
                vitamin_b6_100g: doc['vitamin-b6_100g'],
                vitamin_b9_100g: doc['vitamin-b9_100g'],
                potassium_100g: doc['potassium_100g'],
                chloride_100g: doc['chloride_100g'],
                calcium_100g: doc['calcium_100g'],
                magnesium_100g: doc['magnesium_100g'],
                caffeine_100g: doc['caffeine_100g'],
                taurine_100g: doc['taurine_100g'],
                ph_100g: doc['ph_100g'],
                fruits_vegetables_nuts_100g: doc['fruits-vegetables-nuts_100g'],
                fruits_vegetables_nuts_dried_100g:
                  doc['fruits-vegetables-nuts-dried_100g'],
                fruits_vegetables_nuts_estimate_100g:
                  doc['fruits-vegetables-nuts-estimate_100g'],
                collagen_meat_protein_ratio_100g:
                  doc['collagen-meat-protein-ratio_100g'],
                cocoa_100g: doc['cocoa_100g'],
                chlorophyl_100g: doc['chlorophyl_100g'],
                carbon_footprint_100g: doc['carbon-footprint_100g'],
                carbon_footprint_from_meat_or_fish_100g:
                  doc['carbon-footprint-from-meat-or-fish_100g'],
                nutrition_score_fr_100g: doc['nutrition-score-fr_100g'],
                nutrition_score_uk_100g: doc['nutrition-score-uk_100g'],
                glycemic_index_100g: doc['glycemic-index_100g'],
                water_hardness_100g: doc['water-hardness_100g'],
                choline_100g: doc['choline_100g'],
                phylloquinone_100g: doc['phylloquinone_100g'],
                inositol_100g: doc['inositol_100g'],
                bicarbonate_100g: doc['bicarbonate_100g'],
                carnitine_100g: doc['carnitine_100g'],
              };

              let misc_data = {
                serving_size_g: doc['serving_size'],
                additives_n: parseInt(doc['additives_n'], 10) || 0,
                additives: doc['additives'],
                ingredients_from_palm_oil_n:
                  parseInt(doc['ingredients_from_palm_oil_n']) || 0,
                ingredients_from_palm_oil: doc['ingredients_from_palm_oil'],
                nutrition_grade_fr: doc['nutrition_grade_fr'],
                carbon_footprint_100g: doc['carbon-footprint_100g'],
                nutrition_score_fr_100g: doc['nutrition-score-fr_100g'],
                nutrition_score_uk_100g: doc['nutrition-score-uk_100g'],
              };

              Object.keys(nutrition_facts).forEach(k => {
                if (nutrition_facts[k] === null) delete nutrition_facts[k];
              });

              Object.keys(misc_data).forEach(k => {
                if (misc_data[k] === null) delete misc_data[k];
              });

              promises.push(
                models.Products.create({
                  categoryId: doc['categoryId'] || defaultCategoryId,
                  product_name: doc['product_name'],
                  generic_name: doc['generic_name'],
                  quantity: parseFloat(quantity, 100),
                  quantity_unity: quantity_unity,
                  image_url: doc['image_url'],
                  origins: doc['origins'] || 'unknown',
                  packaging: doc['packaging_tags'],
                  manufacturing_places: doc['manufacturing_places'],
                  traces: doc['traces_fr'],
                  countries: doc['countries_fr'],
                  labels: doc['labels_fr'],
                  purchase_places: doc['purchase_places'],
                  stores: doc['stores'],
                  ingredients_text: doc['ingredients_text'],
                  nutrition_facts,
                  misc_data,
                })
                  .then(doc => {
                    productId = doc.id;

                    logger(
                      `Created product: ${doc.product_name ||
                        null} (id ${productId}/${lineNumber})`,
                    );
                  })
                  .catch(error => {
                    throw new Error(error);
                  }),
              );

              Promise.all(promises)
                .then(() => {
                  countProducts++;
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
        logger(`-----------------------------------`);
        logger(`Created ${countProducts} products`);
        logger(`Created ${countCategories} categories`);
        logger('Done.');

        process.exit();
      },
    );
}

models.sequelize.sync({ force: true, logging: true }).then(main);
