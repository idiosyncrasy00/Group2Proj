const router = require('express').Router();
const System = require('../controllers/system.controller');
const auth = require('../middlewares/auth');

router.post('/feedback', auth, System.sendFeedback);

module.exports = router;
