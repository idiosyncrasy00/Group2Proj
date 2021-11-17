const db = require('./models');

(async () => {
    db.db_reset();
    console.log("Database reseted!");
})();
