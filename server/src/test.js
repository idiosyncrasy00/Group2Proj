const db = require('./models');

(async () => {
    try {
        const users = await db.User.findAll({
            where : {
                firstName: "Xavy"
            },
            raw: true
        });
        console.log(users);
    } catch (error) {
        console.log('ERROR:', error.message);
    }
})();