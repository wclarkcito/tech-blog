const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
        },

        body: {
            type: DataTypes.STRING,
        },

        created_at: {
            type: DataTypes.INTEGER,

        },
        updated_at: {
            type: DataTypes.INTEGER,
        }

    },
    {
        sequelize,
        // timestamps: false,
        // freezeTableName: true,
        // underscored: true,
        // modelName: 'category',
    }
);

module.exports = Blog;