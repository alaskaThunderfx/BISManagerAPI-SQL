"use strict";
const Sequelize = require('sequelize');

const sequelize = require('../database/sequelize.js');

module.exports = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    team_id: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.TIME
    }
}, {
    schema: 'bismanager',
    freezeTableName: true,
    timestamps: false
})