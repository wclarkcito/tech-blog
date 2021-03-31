const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model { }

Comment.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false,
        // primaryKey: true,
        // autoIncrement: true
    },

}, {
    sequelize,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'comment'
})


module.exports = Comment;