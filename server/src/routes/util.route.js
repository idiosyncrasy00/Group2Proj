const router = require('express').Router();
const auth = require('../middlewares/auth');
const Util = require('../controllers/util.controller');

router.get('/reserved', auth, Util.getReservedMeetingList);
router.get('/invited', auth, Util.getInvitedMeetingList);
router.post('/query', auth, Util.queryMeeting);
router.post('/listparticipant', auth, Util.listParticipant);

module.exports = router;
