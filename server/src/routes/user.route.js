const router = require('express').Router();
const User = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.post('/register', User.registerUser);
router.post('/login', User.loginUser);
router.get('/me', auth, User.getInfo);
router.get('/auth', auth, (req, res) => res.send());  // Verify accessToken only

module.exports = router;