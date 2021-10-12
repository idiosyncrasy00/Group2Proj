const router = require('express').Router();
const User = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.post('/register', User.registerUser);
router.post('/auth', User.loginUser);
router.get('/me', auth, User.checkUser);

module.exports = router;