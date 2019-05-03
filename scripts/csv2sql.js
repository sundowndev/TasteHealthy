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
    "name"  character  varying  NOT NULL
  );`,
  },
  {
    table: 'products',
    query: `CREATE TABLE "products" (
    "id" serial primary key NOT NULL,
    "code"  character  varying  NOT NULL,
    "url" character varying NOT NULL,
    "creator" character varying NOT NULL,
    "created_datetime"  DATE  NOT NULL,
    "last_modified_datetime"  DATE  NOT NULL,
    "product_name"  character  varying  NOT NULL,
    "generic_name"  character  varying,
    "quantity"  character  varying,
    "image_url" character  varying,
    "category_id" serial references  categories(id) NOT NULL,
    "packaging" character varying,
    "packaging_tags" character varying,
    "brands" character varying,
    "brands_tags" character varying,
    "origins" character varying,
    "manufacturing_places" character varying,
    "manufacturing_places_tags" character varying,
    "countries_tags" character varying
  );`,
  },
  {
    table: 'product_nutrition_facts',
    query: `CREATE TABLE "product_nutrition_facts" (
    "id" serial NOT NULL,
    "product_id"  serial references  products(id) NOT NULL,
    "energy_100g" double precision,
    "energy_from_fat_100g" double precision,
    "fat_100g" double precision,
    "saturated_fat_100g" double precision,
    "butyric_acid_100g" double precision,
    "caproic_acid_100g" double precision,
    "caprylic_acid_100g" double precision,
    "capric_acid_100g" double precision,
    "lauric_acid_100g" double precision,
    "myristic_acid_100g" double precision,
    "palmitic_acid_100g" double precision,
    "stearic_acid_100g" double precision,
    "arachidic_acid_100g" double precision,
    "behenic_acid_100g" double precision,
    "lignoceric_acid_100g" double precision,
    "cerotic_acid_100g" double precision,
    "montanic_acid_100g" double precision,
    "melissic_acid_100g" double precision,
    "monounsaturated_fat_100g" double precision,
    "polyunsaturated_fat_100g" double precision,
    "omega_3_fat_100g" double precision,
    "alpha_linolenic_acid_100g" double precision,
    "eicosapentaenoic_acid_100g" double precision,
    "docosahexaenoic_acid_100g" double precision,
    "omega_6_fat_100g" double precision,
    "linoleic_acid_100g" double precision,
    "arachidonic_acid_100g" double precision,
    "gamma_linolenic_acid_100g" double precision,
    "dihomo_gamma_linolenic_acid_100g" double precision,
    "omega_9_fat_100g" double precision,
    "oleic_acid_100g" double precision,
    "elaidic_acid_100g" double precision,
    "gondoic_acid_100g" double precision,
    "mead_acid_100g" double precision,
    "erucic_acid_100g" double precision,
    "nervonic_acid_100g" double precision,
    "trans_fat_100g" double precision,
    "cholesterol_100g" double precision,
    "carbohydrates_100g" double precision,
    "sugars_100g" double precision,
    "sucrose_100g" double precision,
    "glucose_100g" double precision,
    "fructose_100g" double precision,
    "lactose_100g" double precision,
    "maltose_100g" double precision,
    "maltodextrins_100g" double precision,
    "starch_100g" double precision,
    "polyols_100g" double precision,
    "fiber_100g" double precision,
    "proteins_100g" double precision,
    "casein_100g" double precision,
    "serum_proteins_100g" double precision,
    "nucleotides_100g" double precision,
    "salt_100g" double precision,
    "sodium_100g" double precision,
    "alcohol_100g" double precision,
    "vitamin_a_100g" double precision,
    "beta_carotene_100g" double precision,
    "vitamin_d_100g" double precision,
    "vitamin_e_100g" double precision,
    "vitamin_k_100g" double precision,
    "vitamin_c_100g" double precision,
    "vitamin_b1_100g" double precision,
    "vitamin_b2_100g" double precision,
    "vitamin_pp_100g" double precision,
    "vitamin_b6_100g" double precision,
    "vitamin_b9_100g" double precision,
    "folates_100g" double precision,
    "vitamin_b12_100g" double precision,
    "biotin_100g" double precision,
    "pantothenic_acid_100g" double precision,
    "silica_100g" double precision,
    "bicarbonate_100g" double precision,
    "potassium_100g" double precision,
    "chloride_100g" double precision,
    "calcium_100g" double precision,
    "phosphorus_100g" double precision,
    "iron_100g" double precision,
    "magnesium_100g" double precision,
    "zinc_100g" double precision,
    "copper_100g" double precision,
    "manganese_100g" double precision,
    "fluoride_100g" double precision,
    "selenium_100g" double precision,
    "chromium_100g" double precision,
    "molybdenum_100g" double precision,
    "iodine_100g" double precision,
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
    "carnitine_100g" double precision
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
      `DROP TABLE IF EXISTS products, product_nutrition_facts, categories CASCADE;`,
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
  let categories = null;
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

          logger(
            `Processing line ${lineNumber} (id ${iProduct}) -- ${doc.product_name ||
              null}`,
          );

          categories = doc.categories_fr.split(',');

          if (doc.categories_fr === '') {
            return resolve(doc);
          }

          for (i = 0; i < categories.length; i++) {
            if (categories[i] === '') {
              continue;
            }

            client
              .query(
                `INSERT INTO categories(
                name
              ) VALUES(
                $1
              ) ON CONFLICT DO NOTHING RETURNING id, name`,
                [categories[i]],
              )
              .then((res) => {
                doc.categoryId = res.rows[0].id;

                logger(333333333, res.rows[0].name, res.rows[0].id);
              });

            if (i === categories.length - 1) {
              resolve(doc);
            }
          }
        }).then(
          (doc) =>
            new Promise((resolve, reject) => {
              logger(doc.categoryId || defaultCategory);

              return client
                .query(
                  `INSERT INTO products(
                code,
                url,
                creator,
                created_datetime,
                last_modified_datetime,
                product_name,
                generic_name,
                quantity,
                image_url,
                category_id,
                packaging,
                packaging_tags,
                brands,
                brands_tags,
                origins,
                manufacturing_places,
                manufacturing_places_tags,
                countries_tags
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
                $18
              ) RETURNING id`,
                  [
                    doc.code || null,
                    doc.url || null,
                    doc.creator || null,
                    doc.created_datetime || null,
                    doc.last_modified_datetime || null,
                    doc.product_name || null,
                    doc.generic_name || null,
                    doc.quantity || null,
                    doc.image_url || null,
                    doc.categoryId || defaultCategory,
                    doc.packaging || null,
                    doc.packaging_tags || null,
                    doc.brands || null,
                    doc.brands_tags || null,
                    doc.origins || null,
                    doc.manufacturing_places || null,
                    doc.manufacturing_places_tags || null,
                    doc.countries_tags || null,
                  ],
                )
                .then(
                  (res) =>
                    new Promise((resolve, reject) => {
                      productId = res.rows[0].id;

                      client.query(
                        `INSERT INTO product_nutrition_facts(
                  product_id,
                  energy_100g,
                  energy_from_fat_100g,
                  fat_100g,
                  saturated_fat_100g,
                  butyric_acid_100g,
                  caproic_acid_100g,
                  caprylic_acid_100g,
                  capric_acid_100g,
                  lauric_acid_100g,
                  myristic_acid_100g,
                  palmitic_acid_100g,
                  stearic_acid_100g,
                  arachidic_acid_100g,
                  behenic_acid_100g,
                  lignoceric_acid_100g,
                  cerotic_acid_100g,
                  montanic_acid_100g,
                  melissic_acid_100g,
                  monounsaturated_fat_100g,
                  polyunsaturated_fat_100g,
                  omega_3_fat_100g,
                  alpha_linolenic_acid_100g,
                  eicosapentaenoic_acid_100g,
                  docosahexaenoic_acid_100g,
                  omega_6_fat_100g,
                  linoleic_acid_100g,
                  arachidonic_acid_100g,
                  gamma_linolenic_acid_100g,
                  dihomo_gamma_linolenic_acid_100g,
                  omega_9_fat_100g,
                  oleic_acid_100g,
                  elaidic_acid_100g,
                  gondoic_acid_100g,
                  mead_acid_100g,
                  erucic_acid_100g,
                  nervonic_acid_100g,
                  trans_fat_100g,
                  cholesterol_100g,
                  carbohydrates_100g,
                  sugars_100g,
                  sucrose_100g,
                  glucose_100g,
                  fructose_100g,
                  lactose_100g,
                  maltose_100g,
                  maltodextrins_100g,
                  starch_100g,
                  polyols_100g,
                  fiber_100g,
                  proteins_100g,
                  casein_100g,
                  serum_proteins_100g,
                  nucleotides_100g,
                  salt_100g,
                  sodium_100g,
                  alcohol_100g,
                  vitamin_a_100g,
                  beta_carotene_100g,
                  vitamin_d_100g,
                  vitamin_e_100g,
                  vitamin_k_100g,
                  vitamin_c_100g,
                  vitamin_b1_100g,
                  vitamin_b2_100g,
                  vitamin_pp_100g,
                  vitamin_b6_100g,
                  vitamin_b9_100g,
                  folates_100g,
                  vitamin_b12_100g,
                  biotin_100g,
                  pantothenic_acid_100g,
                  silica_100g,
                  bicarbonate_100g,
                  potassium_100g,
                  chloride_100g,
                  calcium_100g,
                  phosphorus_100g,
                  iron_100g,
                  magnesium_100g,
                  zinc_100g,
                  copper_100g,
                  manganese_100g,
                  fluoride_100g,
                  selenium_100g,
                  chromium_100g,
                  molybdenum_100g,
                  iodine_100g,
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
                $57,
                $58,
                $59,
                $60,
                $61,
                $62,
                $63,
                $64,
                $65,
                $66,
                $67,
                $68,
                $69,
                $70,
                $71,
                $72,
                $73,
                $74,
                $75,
                $76,
                $77,
                $78,
                $79,
                $80,
                $81,
                $82,
                $83,
                $84,
                $85,
                $86,
                $87,
                $88,
                $89,
                $90,
                $91,
                $92,
                $93,
                $94,
                $95,
                $96,
                $97,
                $98,
                $99,
                $100,
                $101,
                $102,
                $103,
                $104,
                $105,
                $106,
                $107,
                $108
              )`,
                        [
                          productId,
                          doc.energy_100g || null,
                          doc.energy_from_fat_100g || null,
                          doc.fat_100g || null,
                          doc.saturated_fat_100g || null,
                          doc.butyric_acid_100g || null,
                          doc.caproic_acid_100g || null,
                          doc.caprylic_acid_100g || null,
                          doc.capric_acid_100g || null,
                          doc.lauric_acid_100g || null,
                          doc.myristic_acid_100g || null,
                          doc.palmitic_acid_100g || null,
                          doc.stearic_acid_100g || null,
                          doc.arachidic_acid_100g || null,
                          doc.behenic_acid_100g || null,
                          doc.lignoceric_acid_100g || null,
                          doc.cerotic_acid_100g || null,
                          doc.montanic_acid_100g || null,
                          doc.melissic_acid_100g || null,
                          doc.monounsaturated_fat_100g || null,
                          doc.polyunsaturated_fat_100g || null,
                          doc.omega_3_fat_100g || null,
                          doc.alpha_linolenic_acid_100g || null,
                          doc.eicosapentaenoic_acid_100g || null,
                          doc.docosahexaenoic_acid_100g || null,
                          doc.omega_6_fat_100g || null,
                          doc.linoleic_acid_100g || null,
                          doc.arachidonic_acid_100g || null,
                          doc.gamma_linolenic_acid_100g || null,
                          doc.dihomo_gamma_linolenic_acid_100g || null,
                          doc.omega_9_fat_100g || null,
                          doc.oleic_acid_100g || null,
                          doc.elaidic_acid_100g || null,
                          doc.gondoic_acid_100g || null,
                          doc.mead_acid_100g || null,
                          doc.erucic_acid_100g || null,
                          doc.nervonic_acid_100g || null,
                          doc.trans_fat_100g || null,
                          doc.cholesterol_100g || null,
                          doc.carbohydrates_100g || null,
                          doc.sugars_100g || null,
                          doc.sucrose_100g || null,
                          doc.glucose_100g || null,
                          doc.fructose_100g || null,
                          doc.lactose_100g || null,
                          doc.maltose_100g || null,
                          doc.maltodextrins_100g || null,
                          doc.starch_100g || null,
                          doc.polyols_100g || null,
                          doc.fiber_100g || null,
                          doc.proteins_100g || null,
                          doc.casein_100g || null,
                          doc.serum_proteins_100g || null,
                          doc.nucleotides_100g || null,
                          doc.salt_100g || null,
                          doc.sodium_100g || null,
                          doc.alcohol_100g || null,
                          doc.vitamin_a_100g || null,
                          doc.beta_carotene_100g || null,
                          doc.vitamin_d_100g || null,
                          doc.vitamin_e_100g || null,
                          doc.vitamin_k_100g || null,
                          doc.vitamin_c_100g || null,
                          doc.vitamin_b1_100g || null,
                          doc.vitamin_b2_100g || null,
                          doc.vitamin_pp_100g || null,
                          doc.vitamin_b6_100g || null,
                          doc.vitamin_b9_100g || null,
                          doc.folates_100g || null,
                          doc.vitamin_b12_100g || null,
                          doc.biotin_100g || null,
                          doc.pantothenic_acid_100g || null,
                          doc.silica_100g || null,
                          doc.bicarbonate_100g || null,
                          doc.potassium_100g || null,
                          doc.chloride_100g || null,
                          doc.calcium_100g || null,
                          doc.phosphorus_100g || null,
                          doc.iron_100g || null,
                          doc.magnesium_100g || null,
                          doc.zinc_100g || null,
                          doc.copper_100g || null,
                          doc.manganese_100g || null,
                          doc.fluoride_100g || null,
                          doc.selenium_100g || null,
                          doc.chromium_100g || null,
                          doc.molybdenum_100g || null,
                          doc.iodine_100g || null,
                          doc.caffeine_100g || null,
                          doc.taurine_100g || null,
                          doc.ph_100g || null,
                          doc.fruits_vegetables_nuts_100g || null,
                          doc.fruits_vegetables_nuts_dried_100g || null,
                          doc.fruits_vegetables_nuts_estimate_100g || null,
                          doc.collagen_meat_protein_ratio_100g || null,
                          doc.cocoa_100g || null,
                          doc.chlorophyl_100g || null,
                          doc.carbon_footprint_100g || null,
                          doc.carbon_footprint_from_meat_or_fish_100g || null,
                          doc.nutrition_score_fr_100g || null,
                          doc.nutrition_score_uk_100g || null,
                          doc.glycemic_index_100g || null,
                          doc.water_hardness_100g || null,
                          doc.choline_100g || null,
                          doc.phylloquinone_100g || null,
                          doc.beta_glucan_100g || null,
                          doc.inositol_100g || null,
                          doc.carnitine_100g || null,
                        ],
                      );

                      iProduct++;

                      return resolve();
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
