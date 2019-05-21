import Sequelize from 'sequelize';

export default (sequelize/* , DataTypes*/) => {
  const Facts = sequelize.define('Facts', {
    energy_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    energy_from_fat_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fat_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    saturated_fat_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    trans_fat_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cholesterol_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    carbohydrates_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sugars_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sucrose_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    glucose_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fructose_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lactose_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fiber_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    proteins_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    casein_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    serum_proteins_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nucleotides_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    salt_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sodium_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    alcohol_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_a_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_d_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_e_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_k_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_c_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_b1_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_b2_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_pp_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_b6_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_b9_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vitamin_b12_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    potassium_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    chloride_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    calcium_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    magnesium_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    caffeine_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    taurine_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ph_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fruits_vegetables_nuts_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fruits_vegetables_nuts_dried_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fruits_vegetables_nuts_estimate_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    collagen_meat_protein_ratio_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cocoa_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    chlorophyl_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    carbon_footprint_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    carbon_footprint_from_meat_or_fish_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nutrition_score_fr_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nutrition_score_uk_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    glycemic_index_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    water_hardness_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    choline_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phylloquinone_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beta_glucan_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    inositol_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    bicarbonate_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    carnitine_100g: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return Facts;
};
