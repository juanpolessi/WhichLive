'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Lives', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      link_youtube: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },
      link_instagram: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },
      link_facebook: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Lives');
  }
};
