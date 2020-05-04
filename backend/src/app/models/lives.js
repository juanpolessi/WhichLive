'use strict';
module.exports = (sequelize, DataTypes) => {
  const Live = sequelize.define('Live', {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    image: DataTypes.STRING,
    link_youtube: DataTypes.STRING,
    link_instagram: DataTypes.STRING,
    link_facebook: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
  }, {});
  Live.associate = models => {
    Live.belongsTo(models.Category, { foreignKey: 'category_id' });
  };
  return Live;
}