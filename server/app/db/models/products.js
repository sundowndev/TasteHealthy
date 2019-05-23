import Sequelize from 'sequelize';

export default (sequelize /* , DataTypes*/) => {
  const Products = sequelize.define('Products', {
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    generic_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    quantity: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    quantity_unity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    origins: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    packaging: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    manufacturing_places: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    traces: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    countries: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    labels: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    purchase_places: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stores: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ingredients_text: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    nutrition_facts: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    misc_data: {
      type: Sequelize.JSON,
      allowNull: true,
    },
  });

  return Products;
};
