const bcrypt = require('bcrypt');

const generate = async (data) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
};

const verify = async (data, encrypted) => {
    return await bcrypt.compare(data, encrypted);
};

module.exports = { generate, verify };
