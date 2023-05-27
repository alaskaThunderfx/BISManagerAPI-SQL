"use strict";
const Sequelize = require('sequelize');

const sequelize = require('../database/sequelize.js');

module.exports = sequelize.define('team', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    created_by: {
        type: Sequelize.INTEGER
    }
}, {
    schema: 'bismanager',
    freezeTableName: true,
    timestamps: false
})