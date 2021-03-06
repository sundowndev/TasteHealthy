export default (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Categories.associate = (models) => {
    models.Products.belongsTo(models.Categories, {
      as: 'category',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Categories;
};
