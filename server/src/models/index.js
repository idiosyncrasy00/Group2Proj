const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development-local';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
db.db_list = [];

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-8) === 'model.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
        db.db_list.push(model.name);
    });

require('./associations')(db);

//
// Function
//

async function db_init() {
    await db.sequelize.sync();
    if (env === 'development' || env === 'development-local') {
        try {
            const initdb_env = process.env.INIT_DB || "yes";
            if (initdb_env === "yes") {
                let seeder = require('../seeders/seeder.dev');
                await seeder.down(db);
                await seeder.up(db);
            }
        } catch(error) {
            console.log(error.message);
        }
    }
}

async function db_reset() {
    await sequelize.drop();
    await sequelize.sync();
    let seeder = require('../seeders/seeder.dev');
    await seeder.up(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.db_init = db_init;
db.db_reset = db_reset;

module.exports = db;
