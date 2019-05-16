import Sequelize from 'sequelize';
import facts from './nutrition_facts';
import miscData from './misc_data';

export default (sequelize/* , DataTypes*/) => {
  const FactsEntity = facts(sequelize);
  const MiscDataEntity = miscData(sequelize);

  const Products = sequelize.define('products', {
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    generic_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    origins: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    packaging: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    manufacturing_places: {
      type: Sequelize.STRING,
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
      type: Sequelize.STRING,
      allowNull: false,
    },
    purchase_places: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    stores: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ingredients_text: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'products',
  });

  Products.hasOne(FactsEntity);
  FactsEntity.belongsTo(Products, {
    onDelete: 'CASCADE',
    foreignKey: {
      allowNull: false,
    },
  });

  Products.hasOne(MiscDataEntity);
  MiscDataEntity.belongsTo(Products, {
    onDelete: 'CASCADE',
    foreignKey: {
      allowNull: false,
    },
  });

  return Products;
};
