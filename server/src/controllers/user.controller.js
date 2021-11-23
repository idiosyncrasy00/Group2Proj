const User = require('../models').User;
const validation = require('../validations/user.validation');
const _ = require('lodash');
const token_util = require('../utilities/token');
const encrypt_util = require('../utilities/encrypt');


const registerUser = async (req, res) => {
    try {
        const { error, value } = await validation.registerSchema.validate(req.body);
        if (error) {
            res.status(403).send({ error: error.message });
        } else {
            // Save user
            const user = await User.build(value);
            user.password = await encrypt_util.generate(user.password);
            await user.save();
            // Generate token
            const userToken = getUserToken(user);
            const token = token_util.generateToken(userToken);
            res.header('accesstoken', token).send(_.pick(user, ['id', 'username']));
            console.log('User created!');
        }
    } catch(error) {
        res.status(400).send({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (!user) res.status(400).send({ error: 'Invalid username or password' });
        else {
            if (!(await encrypt_util.verify(req.body.password, user.password))) {
                res.status(400).send({ error: 'Invalid username or password' });
            } else {
                const userToken = getUserToken(user);
                const token = token_util.generateToken(userToken);
                res.header('accesstoken', token).send(_.pick(user, ['id', 'username']));
            }
        }
    } catch(error) {
        res.status(400).send({ error: error.message });
    }
};

const getSelfInfo = async (req, res) => {
    let user = await User.findOne({
        where: {
            id: req.user.id
        }
    });
    res.send(_.pick(user, ['id', 'firstname', 'lastname', 'email', 'dob', 'phone', 'address', 'username']));
};

const getInfo = async (req, res) => {
    let user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!user) {
        res.status(404).send({ error: "User not found" });
    } else {
        res.send(_.pick(user, ['id', 'firstname', 'lastname', 'email', 'dob', 'phone', 'address', 'username']));
    }
};

const editUser = async (req, res) => {
    const { error, value } = await validation.editSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        try {
            await User.update(value, {
                where: {
                    id: req.user.id
                }
            });
            res.send();
        } catch(error) {
            res.status(400).send({ error: error.message });
        }
    }
};

const changePassword = async (req, res) => {
    const { error, value } = await validation.changepwSchema.validate(req.body);
    if (error) {
        res.status(403).send({ error: error.message });
    } else {
        let user = await User.findOne({
            where: {
                id: req.user.id
            }
        });
        if (!(await encrypt_util.verify(req.body.oldpassword, user.password))) {
            res.status(401).send({ error: "Password invalid" });
        } else {
            let new_password = await encrypt_util.generate(req.body.password);
            await User.update({ password: new_password }, {
                where: {
                    id: req.user.id
                }
            });
            res.send();
        }
    }
};


// Generate user token from user object
function getUserToken(user) {
    return {
        id: user.id,
        isAdmin: true   // Modify later
    };
}

module.exports = { registerUser, loginUser, getSelfInfo, getInfo, editUser, changePassword };