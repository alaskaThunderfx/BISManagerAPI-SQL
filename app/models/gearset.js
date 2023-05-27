"use strict";
const Sequelize = require('sequelize');

const sequelize = require('../database/sequelize.js');

module.exports = sequelize.define('gearset', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    job: {
        type: Sequelize.STRING
    },
    weapon_id: {
        type: Sequelize.INTEGER
    },
    head_id: {
        type: Sequelize.INTEGER
    },
    body_id: {
        type: Sequelize.INTEGER
    },
    hands_id: {
        type: Sequelize.INTEGER
    },
    legs_id: {
        type: Sequelize.INTEGER
    },
    feet_id: {
        type: Sequelize.INTEGER
    },
    ears_id: {
        type: Sequelize.INTEGER
    },
    neck_id: {
        type: Sequelize.INTEGER
    },
    wrists_id: {
        type: Sequelize.INTEGER
    },
    ring0_id: {
        type: Sequelize.INTEGER
    },
    ring1_id: {
        type: Sequelize.INTEGER
    }
}, {
    schema: 'bismanager',
    freezeTableName: true,
    timestamps: false
})