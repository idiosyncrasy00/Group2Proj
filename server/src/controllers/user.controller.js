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
            const userToken = {
                user: user.id,
                isAdmin: true  // WORK: Modify isAdmin later
            };
            const token = token_util.generateToken(userToken);
            res.header('accessToken', token).send(_.pick(user, ['id', 'username']));
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
            const userToken = {
                user: user.id,
                isAdmin: true  // WORK: Modify isAdmin later
            };
            const token = token_util.generateToken(userToken);
            res.header('accessToken', token).send(_.pick(user, ['id', 'username']));
        }
    }
};

const getInfo = async (req, res) => {
    let user = await User.findOne({
        where: {
            username: req.user.user
        }
    });
    res.send(_.pick(user, ['name', 'username']));
};

module.exports = { registerUser, loginUser, getInfo };