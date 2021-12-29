const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  sequelize.define("budget manager", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    email: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    
    date_of_birth: {
      type: DataTypes.INTEGER,
    },


    sexo: {
      type: DataTypes.STRING,
    },
  });
};
