import Sequelize from 'sequelize';

export default (sequelize/* , DataTypes*/) => {
  const MiscData = sequelize.define('misc_data', {
    serving_size_g: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    no_nutriments: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    additives_n: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    additives: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ingredients_from_palm_oil_n: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ingredients_from_palm_oil: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nutrition_grade_fr: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    main_category_fr: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    carbon_footprint_100g: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nutrition_score_fr_100g: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nutrition_score_uk_100g: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'misc_data',
  });

  return MiscData;
};
