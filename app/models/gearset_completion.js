"use strict";
const Sequelize = require('sequelize');

const sequelize = require('../database/sequelize.js');

module.exports = sequelize.define('gearset_completion', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gearset: {
        type: Sequelize.INTEGER
    },
    weapon: {
        type: Sequelize.BOOLEAN
    },
    head: {
        type: Sequelize.BOOLEAN
    },
    body: {
        type: Sequelize.BOOLEAN
    },
    hands: {
        type: Sequelize.BOOLEAN
    },
    legs: {
        type: Sequelize.BOOLEAN
    },
    feet: {
        type: Sequelize.BOOLEAN
    },
    ears: {
        type: Sequelize.BOOLEAN
    },
    neck: {
        type: Sequelize.BOOLEAN
    },
    wrists: {
        type: Sequelize.BOOLEAN
    },
    ring0: {
        type: Sequelize.BOOLEAN
    },
    ring1: {
        type: Sequelize.BOOLEAN
    }
}, {
    schema: 'bismanager',
    freezeTableName: true,
    timestamps: false
})