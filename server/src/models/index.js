const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development-local';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Development only
(async () => {
    if (env === 'development' || env === 'development-local') {
        // Object.keys(db).forEach(modelName => db[modelName].sync({ force: true }));  // Rebuild model
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
})();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
