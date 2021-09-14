const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Investment extends Model {}

Investment.init(
    {
      //updated column name
      investment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      //Symbol company name
      symbol_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      portfolio_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "portfolio",
          key: "id",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'investment',
    }
  );

  module.exports = Investment;