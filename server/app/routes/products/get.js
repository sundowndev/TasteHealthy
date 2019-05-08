import { client } from '@/db/db.connect';
import * as msg from '@/errors/message_errors.js';

const products_fields = [
  'id',
  'url',
  'created_datetime',
  'last_modified_datetime',
  'product_name',
  'generic_name',
  'quantity',
  'image_url',
  'category',
  'origins',
  'packaging',
  'manufacturing_places',
  'traces',
  'countries',
  'labels',
  'purchase_places',
  'stores',
  'ingredients_text',
];
const product_nutrition_facts_fields = [
  'id',
  'product_id',
  'energy_100g',
  'energy_from_fat_100g',
  'fat_100g',
  'saturated_fat_100g',
  'trans_fat_100g',
  'cholesterol_100g',
  'carbohydrates_100g',
  'sugars_100g',
  'sucrose_100g',
  'glucose_100g',
  'fructose_100g',
  'lactose_100g',
  'fiber_100g',
  'proteins_100g',
  'casein_100g',
  'serum_proteins_100g',
  'nucleotides_100g',
  'salt_100g',
  'sodium_100g',
  'alcohol_100g',
  'vitamin_a_100g',
  'vitamin_d_100g',
  'vitamin_e_100g',
  'vitamin_k_100g',
  'vitamin_c_100g',
  'vitamin_b1_100g',
  'vitamin_b2_100g',
  'vitamin_pp_100g',
  'vitamin_b6_100g',
  'vitamin_b9_100g',
  'vitamin_b12_100g',
  'potassium_100g',
  'chloride_100g',
  'calcium_100g',
  'magnesium_100g',
  'caffeine_100g',
  'taurine_100g',
  'ph_100g',
  'fruits_vegetables_nuts_100g',
  'fruits_vegetables_nuts_dried_100g',
  'fruits_vegetables_nuts_estimate_100g',
  'collagen_meat_protein_ratio_100g',
  'cocoa_100g',
  'chlorophyl_100g',
  'carbon_footprint_100g',
  'carbon_footprint_from_meat_or_fish_100g',
  'nutrition_score_fr_100g',
  'nutrition_score_uk_100g',
  'glycemic_index_100g',
  'water_hardness_100g',
  'choline_100g',
  'phylloquinone_100g',
  'beta_glucan_100g',
  'inositol_100g',
  'bicarbonate_100g',
  'carnitine_100g',
];
const product_misc_data_fields = [
  'id',
  'product_id',
  'serving_size_g',
  'no_nutriments',
  'additives_n',
  'additives',
  'ingredients_from_palm_oil_n',
  'ingredients_from_palm_oil',
  'nutrition_grade_fr',
  'main_category_fr',
  'carbon_footprint_100g',
  'nutrition_score_fr_100g',
  'nutrition_score_uk_100g',
];

export const get_products = (req, res, next) => {
  let query = null;
  let params = [];

  if (req.query.query) {
    query = `SELECT ${products_fields.join(
      ',',
    )} FROM products WHERE to_tsvector(product_name) @@ to_tsquery($1) LIMIT ${
      req.limit
    } OFFSET ${req.offset}`;
    params = [req.query.query];
  } else {
    query = `SELECT
    ${products_fields.join(',')}
    FROM products ORDER BY id DESC LIMIT ${req.limit} OFFSET ${req.offset}`;
  }

  client
    .query(query, params)
    .then((res) => {
      req.results = res.rows.length;
      req.return = res.rows || [];
    })
    .then(next);
};

export const get_one_product = (req, res, next) => {
  client
    .query(`SELECT ${products_fields.join(',')} FROM products WHERE id = $1`, [
      req.params.productId,
    ])
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.productNotFound());
      }

      req.return = res.rows[0] || {};
    })
    .then(next);
};

export const get_one_product_facts = (req, res, next) => {
  client
    .query(
      `SELECT ${product_nutrition_facts_fields.join(
        ',',
      )} FROM product_nutrition_facts WHERE product_id = $1`,
      [req.params.productId],
    )
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.productNotFound());
      }

      req.return = res.rows[0] || {};
    })
    .then(next);
};

export const get_one_product_misc_data = (req, res, next) => {
  client
    .query(
      `SELECT ${product_misc_data_fields.join(
        ',',
      )} FROM product_misc_data WHERE product_id = $1`,
      [req.params.productId],
    )
    .then((res) => {
      if (!res.rows[0]) {
        return next(msg.productNotFound());
      }

      req.return = res.rows[0] || {};
    })
    .then(next);
};
