"use strict";
const Sequelize = require('sequelize');

const sequelize = require('../database/sequelize.js');

module.exports = sequelize.define('gear', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    slot: {
        type: Sequelize.STRING
    },
    job: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    acquisition: {
        type: Sequelize.STRING
    }
}, {
    schema: 'bismanager',
    freezeTableName: true,
    timestamps: false
})