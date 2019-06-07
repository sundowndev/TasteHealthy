export default (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generic_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity_unity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    origins: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    packaging: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturing_places: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    countries: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    labels: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    purchase_places: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stores: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nutrition_facts: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    misc_data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  return Products;
};
