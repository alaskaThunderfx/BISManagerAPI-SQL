const express = require("express");
const Gear = require("./app/models/gear.js")
const User = require("./app/models/user.js")
const Team = require("./app/models/team.js")
const Gearset = require("./app/models/gearset.js")
const GearsetCompletion = require("./app/models/gearset_completion.js")
const Sequelize = require("sequelize");

const { Op } = Sequelize;

const app = express();

User.hasMany(Gearset, {
    foreignKey: 'user_id',
    freezeTableName: true
});

Gearset.belongsTo(User, {
    foreignKey: 'user_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'weapon_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'head_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'body_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'hands_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'legs_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'feet_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'ears_id',
    freezeTableName: true
});

Gear.hasMany(Gearset, {
    foreignKey: 'neck_id',
    freezeTableName: true
});
Gear.hasMany(Gearset, {
    foreignKey: 'wrists_id',
    freezeTableName: true
});
Gear.hasMany(Gearset, {
    foreignKey: 'ring0_id',
    freezeTableName: true
});
Gear.hasMany(Gearset, {
    foreignKey: 'ring1_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'weapon_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'head_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'body_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'hands_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'legs_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'feet_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'ears_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'neck_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'wrists_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'ring0_id',
    freezeTableName: true
});

Gearset.belongsTo(Gear, {
    foreignKey: 'ring1_id',
    freezeTableName: true
});

// create a gear piece
app.post('/api/gear', function (req, res) {
    Gear.create({
        name: "ring",
        slot: "ring1",
        job: ["war", "drk"],
        acquisition: "p1s"
    }).then((gearPiece) => {
        res.json(gearPiece)
    })
});

// create a user
app.post('/api/user', function (req, res) {
    User.create({
        username: "Polly",
        team_id: null
    }).then((user) => {
        res.json(user)
    })
});

// create a team
app.post('/api/team', function (req, res) {
    Team.create({
        name: "Poops",
        created_by: 1
    }).then((team) => {
        res.json(team)
    })
});

// create a gearset
app.post('/api/gearset', function (req, res) {
    Gearset.create({
        user_id: 1,
        job: "war",
        weapon_id: 1,
        head_id: 4,
        body_id: 5,
        hands_id: 6,
        legs_id: 7,
        feet_id: 8,
        ears_id: 9,
        neck_id: 10,
        wrists_id: 11,
        ring0_id: 12,
        ring1_id: 13
    }).then((gearset) => {
        res.json(gearset)
    })
});

// return all gear pieces
app.get('/api/gear', function (req, res) {
    let filter = {};
    let { q } = req.query;

    if (q) {
        filter = {
            where: {
                name: {
                    [Op.like]: `${q}%`
                }
            }
        }
    }

    Gear.findAll().then((gearPiece) => {
        res.json(gearPiece)
    });
});

// return all gearsets
app.get('/api/gearset', function (req, res) {
    let filter = {};
    let { q } = req.query;

    if (q) {
        filter = {
            where: {
                name: {
                    [Op.like]: `${q}%`
                }
            }
        }
    }

    Gearset.findAll().then((gearset) => {
        res.json(gearset)
    });
});

// return single gear piece
app.get('/api/gear/:id', function (req, res) {
    let { id } = req.params;

    Gear.findByPk(id).then((gearPiece) => {
        if (gearPiece) {
            res.json(gearPiece);
        } else {
            res.status(404).send();
        }

    });
});

// return single user
app.get('/api/user/:id', function (req, res) {
    let { id } = req.params;

    User.findByPk(id, {
        include: [Gearset]
    }).then((user) => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).send();
        }

    });
});

// return single gearset
app.get('/api/gearset/:id', function (req, res) {
    let { id } = req.params;

    Gearset.findByPk(id, {
        include: [User, Gear]
    }).then((gearset) => {
        if (gearset) {
            res.json(gearset);
        } else {
            res.status(404).send();
        }

    });
});

app.listen(8000);