'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: DataTypes.STRING,
    }, {});
    Category.associate = models => {
        Category.hasMany(models.Live, { foreignKey: 'category_id' });
    };
    return Category;
}