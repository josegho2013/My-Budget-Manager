const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("operations", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.STRING,
    },
  });
};
