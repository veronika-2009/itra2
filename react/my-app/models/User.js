const Sequelize = require('sequelize');
const db = require('../database/db');



module.exports = db.sequelize.define(
    "data",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: true
        },
        date_reg: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        date_author: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        // status: {
        //     type: Sequelize.ENUM('BLOCK', 'UNBLOCK'),
        //     allowNull: false,
        //     defaultValue: 'UNBLOCK',
        //     validate: {
        //         isIn: {
        //             args: [['BLOCK', 'UNBLOCK']],
        //             msg: "Wrong status"
        //         }
        //     }
        // }
    },
    {
        timestamps: false
    }
)