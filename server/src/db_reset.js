const db = require('./models');

(async () => {
    db.sequelize.sync();
    db.db_reset();
    console.log("Database reseted!");
})();
