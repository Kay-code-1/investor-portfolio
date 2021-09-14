const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Portfolio extends Model {}

Portfolio.init(
    {   
        //renamed column to portfolio_id as per index.js
        portfolio_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'portfolio',
      }
);

module.exports = Portfolio;