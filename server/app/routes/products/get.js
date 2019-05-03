import { client } from '@/db/db.connect';

const products_fields = [
  'id',
  'code',
  'url',
  'creator',
  'created_datetime',
  'last_modified_datetime',
  'product_name',
  'generic_name',
  'quantity',
  'image_url',
  'category_id',
  'packaging',
  'packaging_tags',
  'brands',
  'brands_tags',
  'origins',
  'manufacturing_places',
  'manufacturing_places_tags',
  'countries_tags',
];
const product_nutrition_facts_fields = [
  'product_id',
  'energy_100g',
  'energy_from_fat_100g',
  'fat_100g',
  'saturated_fat_100g',
  'butyric_acid_100g',
  'caproic_acid_100g',
  'caprylic_acid_100g',
  'capric_acid_100g',
  'lauric_acid_100g',
  'myristic_acid_100g',
  'palmitic_acid_100g',
  'stearic_acid_100g',
  'arachidic_acid_100g',
  'behenic_acid_100g',
  'lignoceric_acid_100g',
  'cerotic_acid_100g',
  'montanic_acid_100g',
  'melissic_acid_100g',
  'monounsaturated_fat_100g',
  'polyunsaturated_fat_100g',
  'omega_3_fat_100g',
  'alpha_linolenic_acid_100g',
  'eicosapentaenoic_acid_100g',
  'docosahexaenoic_acid_100g',
  'omega_6_fat_100g',
  'linoleic_acid_100g',
  'arachidonic_acid_100g',
  'gamma_linolenic_acid_100g',
  'dihomo_gamma_linolenic_acid_100g',
  'omega_9_fat_100g',
  'oleic_acid_100g',
  'elaidic_acid_100g',
  'gondoic_acid_100g',
  'mead_acid_100g',
  'erucic_acid_100g',
  'nervonic_acid_100g',
  'trans_fat_100g',
  'cholesterol_100g',
  'carbohydrates_100g',
  'sugars_100g',
  'sucrose_100g',
  'glucose_100g',
  'fructose_100g',
  'lactose_100g',
  'maltose_100g',
  'maltodextrins_100g',
  'starch_100g',
  'polyols_100g',
  'fiber_100g',
  'proteins_100g',
  'casein_100g',
  'serum_proteins_100g',
  'nucleotides_100g',
  'salt_100g',
  'sodium_100g',
  'alcohol_100g',
  'vitamin_a_100g',
  'beta_carotene_100g',
  'vitamin_d_100g',
  'vitamin_e_100g',
  'vitamin_k_100g',
  'vitamin_c_100g',
  'vitamin_b1_100g',
  'vitamin_b2_100g',
  'vitamin_pp_100g',
  'vitamin_b6_100g',
  'vitamin_b9_100g',
  'folates_100g',
  'vitamin_b12_100g',
  'biotin_100g',
  'pantothenic_acid_100g',
  'silica_100g',
  'bicarbonate_100g',
  'potassium_100g',
  'chloride_100g',
  'calcium_100g',
  'phosphorus_100g',
  'iron_100g',
  'magnesium_100g',
  'zinc_100g',
  'copper_100g',
  'manganese_100g',
  'fluoride_100g',
  'selenium_100g',
  'chromium_100g',
  'molybdenum_100g',
  'iodine_100g',
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
  'carnitine_100g',
];

export const get_products = (req, res, next) => {
  let query = null;
  let params = [];

  if (req.query.query) {
    query = `SELECT
    ${products_fields.join(',')}
    FROM products WHERE product_name ~ $1 LIMIT ${req.limit} OFFSET ${
  req.offset
}`;
    params = [req.query.query];
  }
  else {
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
        return next({ code: 404, message: 'Product not found' });
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
        return next({ code: 404, message: 'Product not found' });
      }

      req.return = res.rows[0] || {};
    })
    .then(next);
};
