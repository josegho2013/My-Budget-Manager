const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  sequelize.define("budget manager", {
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
      type: DataTypes.INTEGER,
    },


    sexo: {
      type: DataTypes.STRING,
    },
  });
};
