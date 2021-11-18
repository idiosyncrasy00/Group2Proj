const router = require('express').Router();
const auth = require('../middlewares/auth');
const Util = require('../controllers/util.controller');

router.get('/reserved', auth, Util.getReservedMeetingList);
router.get('/invited', auth, Util.getInvitedMeetingList);

module.exports = router;
