const router = require('express').Router();
const User = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.post('/register', User.registerUser);
router.post('/login', User.loginUser);
router.get('/auth', auth, (req, res) => res.send());  // Verify accessToken only
router.get('/me', auth, User.getSelfInfo);
router.get('/info/:id', auth, User.getInfo);

module.exports = router;