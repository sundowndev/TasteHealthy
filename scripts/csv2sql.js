/* eslint-disable no-console */
/* eslint-disable max-lines */
const path = require('path');
const csv = require('csvtojson');
const { Client } = require('pg');

// ---------------- Variables ----------------
const csvFilePath = path.join(process.cwd(), './scripts/test2.csv');
// const csvFilePath = path.join(
//   '/home/sundowndev/Téléchargements/fr.openfoodfacts.org.products.csv',
// );

const dbDns = {
  user: process.env.API_DB_USER || 'postgres',
  host: process.env.API_DB_HOST || '127.0.0.1',
  database: process.env.API_DB || 'tastehealthy',
  password: process.env.API_DB_PWD || 'tastehealthy',
  port: process.env.API_DB_PORT || 3306,
};

const tables = [
  {
    table: 'categories',
    query: `CREATE TABLE "categories" (
    "id" serial primary key NOT NULL,
    "name"  character  varying  UNIQUE NOT NULL
  );`,
  },
  {
    table: 'products',
    query: `CREATE TABLE "products" (
    "id" serial primary key NOT NULL,
    "url" character varying NOT NULL,
    "created_datetime" character varying NOT NULL,
    "last_modified_datetime" DATE NOT NULL,
    "product_name" character varying NOT NULL,
    "generic_name" character varying,
    "quantity" character varying,
    "image_url" character varying,
    "category" serial references  categories(id),
    "origins" character varying,
    "packaging" character varying,
    "manufacturing_places" character varying,
    "traces" character varying,
    "countries" character varying,
    "labels" character varying,
    "purchase_places" character varying,
    "stores" character varying,
    "ingredients_text" character varying
  );`,
  },
  {
    table: 'product_nutrition_facts',
    query: `CREATE TABLE "product_nutrition_facts" (
    "id" serial primary key NOT NULL,
    "product_id"  serial references  products(id) NOT NULL,
    "energy_100g" double precision,
    "energy_from_fat_100g" double precision,
    "fat_100g" double precision,
    "saturated_fat_100g" double precision,
    "trans_fat_100g" double precision,
    "cholesterol_100g" double precision,
    "carbohydrates_100g" double precision,
    "sugars_100g" double precision,
    "sucrose_100g" double precision,
    "glucose_100g" double precision,
    "fructose_100g" double precision,
    "lactose_100g" double precision,
    "fiber_100g" double precision,
    "proteins_100g" double precision,
    "casein_100g" double precision,
    "serum_proteins_100g" double precision,
    "nucleotides_100g" double precision,
    "salt_100g" double precision,
    "sodium_100g" double precision,
    "alcohol_100g" double precision,
    "vitamin_a_100g" double precision,
    "vitamin_d_100g" double precision,
    "vitamin_e_100g" double precision,
    "vitamin_k_100g" double precision,
    "vitamin_c_100g" double precision,
    "vitamin_b1_100g" double precision,
    "vitamin_b2_100g" double precision,
    "vitamin_pp_100g" double precision,
    "vitamin_b6_100g" double precision,
    "vitamin_b9_100g" double precision,
    "vitamin_b12_100g" double precision,
    "potassium_100g" double precision,
    "chloride_100g" double precision,
    "calcium_100g" double precision,
    "magnesium_100g" double precision,
    "caffeine_100g" double precision,
    "taurine_100g" double precision,
    "ph_100g" double precision,
    "fruits_vegetables_nuts_100g" double precision,
    "fruits_vegetables_nuts_dried_100g" double precision,
    "fruits_vegetables_nuts_estimate_100g" double precision,
    "collagen_meat_protein_ratio_100g" double precision,
    "cocoa_100g" double precision,
    "chlorophyl_100g" double precision,
    "carbon_footprint_100g" double precision,
    "carbon_footprint_from_meat_or_fish_100g" double precision,
    "nutrition_score_fr_100g" double precision,
    "nutrition_score_uk_100g" double precision,
    "glycemic_index_100g" double precision,
    "water_hardness_100g" double precision,
    "choline_100g" double precision,
    "phylloquinone_100g" double precision,
    "beta_glucan_100g" double precision,
    "inositol_100g" double precision,
    "bicarbonate_100g" double precision,
    "carnitine_100g" double precision
  );`,
  },
  {
    table: 'product_misc_data',
    query: `CREATE TABLE "product_misc_data" (
      "id" serial primary key NOT NULL,      
      "product_id"  serial references  products(id) NOT NULL,      
      "serving_size_g" character varying,
      "no_nutriments" character varying,
      "additives_n" int,
      "additives" character varying,
      "ingredients_from_palm_oil_n" int,
      "ingredients_from_palm_oil" character varying,
      "nutrition_grade_fr" character varying,
      "main_category_fr" character varying,
      "carbon_footprint_100g" character varying,
      "nutrition_score_fr_100g" character varying,
      "nutrition_score_uk_100g" character varying
    );`,
  },
];

// ---------------- Functions & script ----------------
const logger = (...args) => console.log(...args);

async function main() {
  const client = new Client(dbDns);

  await client
    .connect()
    .then(() => logger('[*] Connected to postgres client'))
    .catch((error) => {
      throw new Error(error);
    });

  await client
    .query(
      `DROP TABLE IF EXISTS products, product_nutrition_facts, categories, product_misc_data CASCADE;`,
    )
    .then(() => logger(`[*] Dropped tables database`));

  for (let i = 0; i < tables.length; i++) {
    await client
      .query(tables[i].query)
      .then(() => logger(`[*] Created ${tables[i].table} schema`))
      .catch((error) => {
        throw new Error(error);
      });
  }

  let iProduct = 1;
  let productId = null;
  let category = null;
  let defaultCategory = null;

  client
    .query(
      `INSERT INTO categories(
                name
              ) VALUES(
                $1
              ) ON CONFLICT DO NOTHING RETURNING id, name`,
      ['Inconnue'],
    )
    .then((res) => {
      defaultCategory = res.rows[0].id;
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
          if (doc.product_name === '') {
            return reject();
          }

          if (doc.main_category_fr === '') {
            return resolve(doc);
          }

          category = doc.main_category_fr || null;

          const insert_cat = [];

          if (
            category === '' ||
            category === null ||
            category.indexOf(':') === 2
          ) {
            return resolve(doc);
          }

          insert_cat.push(
            client
              .query(
                `INSERT INTO categories(
              name
            ) VALUES(
              $1
            ) ON CONFLICT(name) DO NOTHING RETURNING id, name`,
                [category],
              )
              .then((res) => {
                if (res.rows[0]) {
                  doc.categoryId = res.rows[0].id;

                  logger('Category added', res.rows[0].name, res.rows[0].id);
                }
              }),
          );

          Promise.all(insert_cat).then(() => {
            resolve(doc);
          });
        }).then(
          (doc) =>
            new Promise((resolve, reject) => {
              if (doc.countries_fr.indexOf('France') < 0) {
                return resolve();
              }

              return client
                .query(
                  `INSERT INTO products(
                url,
                created_datetime,
                last_modified_datetime,
                product_name,
                generic_name,
                quantity,
                image_url,
                category,
                origins,
                packaging,
                manufacturing_places,
                traces,
                countries,
                labels,
                purchase_places,
                stores,
                ingredients_text
              ) VALUES(
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9,
                $10,
                $11,
                $12,
                $13,
                $14,
                $15,
                $16,
                $17
              ) RETURNING id`,
                  [
                    doc['url'] || null,
                    doc['created_datetime'] || null,
                    doc['last_modified_datetime'] || null,
                    doc['product_name'] || null,
                    doc['generic_name'] || null,
                    doc['quantity'] || null,
                    doc['image_url'] || null,
                    doc['categoryId'] || defaultCategory,
                    doc['origins'] || null,
                    doc['packaging'] || null,
                    doc['manufacturing_places'] || null,
                    doc['traces_fr'] || null,
                    doc['countries_fr'] || null,
                    doc['labels_fr'] || null,
                    doc['purchase_places'] || null,
                    doc['stores'] || null,
                    doc['ingredients_text'] || null,
                  ],
                )
                .then(
                  (res) =>
                    new Promise((resolve, reject) => {
                      productId = res.rows[0].id;

                      iProduct = productId;

                      logger(
                        `Processing line ${lineNumber} (id ${iProduct}) -- ${doc.product_name ||
                          null}`,
                      );

                      client.query(
                        `INSERT INTO product_nutrition_facts(
                      product_id,
                      energy_100g,
                      energy_from_fat_100g,
                      fat_100g,
                      saturated_fat_100g,
                      trans_fat_100g,
                      cholesterol_100g,
                      carbohydrates_100g,
                      sugars_100g,
                      sucrose_100g,
                      glucose_100g,
                      fructose_100g,
                      lactose_100g,
                      fiber_100g,
                      proteins_100g,
                      casein_100g,
                      serum_proteins_100g,
                      nucleotides_100g,
                      salt_100g,
                      sodium_100g,
                      alcohol_100g,
                      vitamin_a_100g,
                      vitamin_d_100g,
                      vitamin_e_100g,
                      vitamin_k_100g,
                      vitamin_c_100g,
                      vitamin_b1_100g,
                      vitamin_b2_100g,
                      vitamin_pp_100g,
                      vitamin_b6_100g,
                      vitamin_b9_100g,
                      vitamin_b12_100g,
                      potassium_100g,
                      chloride_100g,
                      calcium_100g,
                      magnesium_100g,
                      caffeine_100g,
                      taurine_100g,
                      ph_100g,
                      fruits_vegetables_nuts_100g,
                      fruits_vegetables_nuts_dried_100g,
                      fruits_vegetables_nuts_estimate_100g,
                      collagen_meat_protein_ratio_100g,
                      cocoa_100g,
                      chlorophyl_100g,
                      carbon_footprint_100g,
                      carbon_footprint_from_meat_or_fish_100g,
                      nutrition_score_fr_100g,
                      nutrition_score_uk_100g,
                      glycemic_index_100g,
                      water_hardness_100g,
                      choline_100g,
                      phylloquinone_100g,
                      beta_glucan_100g,
                      inositol_100g,
                      bicarbonate_100g,
                      carnitine_100g
                  ) VALUES(
                    $1,
                    $2,
                    $3,
                    $4,
                    $5,
                    $6,
                    $7,
                    $8,
                    $9,
                    $10,
                    $11,
                    $12,
                    $13,
                    $14,
                    $15,
                    $16,
                    $17,
                    $18,
                    $19,
                    $20,
                    $21,
                    $22,
                    $23,
                    $24,
                    $25,
                    $26,
                    $27,
                    $28,
                    $29,
                    $30,
                    $31,
                    $32,
                    $33,
                    $34,
                    $35,
                    $36,
                    $37,
                    $38,
                    $39,
                    $40,
                    $41,
                    $42,
                    $43,
                    $44,
                    $45,
                    $46,
                    $47,
                    $48,
                    $49,
                    $50,
                    $51,
                    $52,
                    $53,
                    $54,
                    $55,
                    $56,
                    $57
                  )`,
                        [
                          productId,
                          doc['energy_100g'] || null,
                          doc['energy-from-fat_100g'] || null,
                          doc['fat_100g'] || null,
                          doc['saturated-fat_100g'] || null,
                          doc['trans-fat_100g'] || null,
                          doc['cholesterol_100g'] || null,
                          doc['carbohydrates_100g'] || null,
                          doc['sugars_100g'] || null,
                          doc['sucrose_100g'] || null,
                          doc['glucose_100g'] || null,
                          doc['fructose_100g'] || null,
                          doc['lactose_100g'] || null,
                          doc['fiber_100g'] || null,
                          doc['proteins_100g'] || null,
                          doc['casein_100g'] || null,
                          doc['serum-proteins_100g'] || null,
                          doc['nucleotides_100g'] || null,
                          doc['salt_100g'] || null,
                          doc['sodium_100g'] || null,
                          doc['alcohol_100g'] || null,
                          doc['vitamin-a_100g'] || null,
                          doc['vitamin-d_100g'] || null,
                          doc['vitamin-e_100g'] || null,
                          doc['vitamin-k_100g'] || null,
                          doc['vitamin-c_100g'] || null,
                          doc['vitamin-b1_100g'] || null,
                          doc['vitamin-b2_100g'] || null,
                          doc['vitamin-pp_100g'] || null,
                          doc['vitamin-b6_100g'] || null,
                          doc['vitamin-b9_100g'] || null,
                          doc['vitamin-b12_100g'] || null,
                          doc['potassium_100g'] || null,
                          doc['chloride_100g'] || null,
                          doc['calcium_100g'] || null,
                          doc['magnesium_100g'] || null,
                          doc['caffeine_100g'] || null,
                          doc['taurine_100g'] || null,
                          doc['ph_100g'] || null,
                          doc['fruits-vegetables-nuts_100g'] || null,
                          doc['fruits-vegetables-nuts-dried_100g'] || null,
                          doc['fruits-vegetables-nuts-estimate_100g'] || null,
                          doc['collagen-meat-protein-ratio_100g'] || null,
                          doc['cocoa_100g'] || null,
                          doc['chlorophyl_100g'] || null,
                          doc['carbon-footprint_100g'] || null,
                          doc['carbon-footprint-from-meat-or-fish_100g'] ||
                            null,
                          doc['nutrition-score-fr_100g'] || null,
                          doc['nutrition-score-uk_100g'] || null,
                          doc['glycemic-index_100g'] || null,
                          doc['water-hardness_100g'] || null,
                          doc['choline_100g'] || null,
                          doc['phylloquinone_100g'] || null,
                          doc['beta-glucan_100g'] || null,
                          doc['inositol_100g'] || null,
                          doc['bicarbonate_100g'] || null,
                          doc['carnitine_100g'] || null,
                        ],
                      );

                      return resolve(productId);
                    }),
                )
                .then(
                  (productId) =>
                    new Promise((resolve, reject) => {
                      return client
                        .query(
                          `INSERT INTO product_misc_data(
                            product_id,
                            serving_size_g,
                            no_nutriments,
                            additives_n,
                            additives,
                            ingredients_from_palm_oil_n,
                            ingredients_from_palm_oil,
                            nutrition_grade_fr,
                            main_category_fr,
                            carbon_footprint_100g,
                            nutrition_score_fr_100g,
                            nutrition_score_uk_100g
                          ) VALUES(
                            $1,
                            $2,
                            $3,
                            $4,
                            $5,
                            $6,
                            $7,
                            $8,
                            $9,
                            $10,
                            $11,
                            $12
                          ) RETURNING id`,
                          [
                            productId,
                            doc['serving_size'] || null,
                            doc['no_nutriments'] || null,
                            doc['additives_n'] || null,
                            doc['additives'] || null,
                            doc['ingredients_from_palm_oil_n'] || null,
                            doc['ingredients_from_palm_oil'] || null,
                            doc['nutrition_grade_fr'] || null,
                            doc['main_category_fr'] || null,
                            doc['carbon_footprint_100g'] || null,
                            doc['nutrition_score_fr_100g'] || null,
                            doc['nutrition_score_uk_100g'] || null,
                          ],
                        )
                        .then(resolve);
                    }),
                )
                .then(resolve)
                .catch((error) => reject(error));
            }),
        ),
      (error) => {
        throw new Error(error);
      },
      () => {
        logger('Done.');
        client.end();
        process.exit();
      },
    );
}

main();
