import Sequelize from 'sequelize';
import products from './products';

export default (sequelize/* , DataTypes*/) => {
  const Products = products(sequelize);

  const Categories = sequelize.define('categories', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'categories',
  });

  Categories.hasMany(Products);
  Products.belongsTo(Categories, {
    onDelete: 'CASCADE',
    foreignKey: {
      allowNull: false,
    },
  });

  return Categories;
};
