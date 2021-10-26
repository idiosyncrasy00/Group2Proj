const User = require('../models').User;
const bcrypt = require('bcrypt');
const validation = require('../validations/user.validation');
const _ = require('lodash');
const token_util = require('../utilities/token');


const registerUser = async (req, res) => {
    try {
        const { error, value } = await validation.registerSchema.validate(req.body);
        if (error) {
            res.status(400).send({ error: error.message });
        } else {
            // Save user
            const user = await User.build(value);
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
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
    let user = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (!user) res.status(400).send({ error: 'Invalid username or password' });
    else {
        if (!(await bcrypt.compare(req.body.password, user.password))) {
            res.status(400).send({ error: 'Invalid username or password' });
        } else {
            const userToken = getUserToken(user);
            const token = token_util.generateToken(userToken);
            res.header('accesstoken', token).send(_.pick(user, ['id', 'username']));
        }
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


// Generate user token from user object
function getUserToken(user) {
    return {
        id: user.id,
        isAdmin: true   // Modify later
    };
}

module.exports = { registerUser, loginUser, getSelfInfo, getInfo };