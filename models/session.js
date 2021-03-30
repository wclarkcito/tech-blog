const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Session extends Model { }

Session.init({
    sid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    expires: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    data: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
    updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
}, {
    sequelize,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'comment'
})


module.exports = Comment;