const router = require('express').Router();
const auth = require('../middlewares/auth');
const Util = require('../controllers/util.controller');

router.get('/reserved', auth, Util.getReservedMeetingList);
router.get('/invited', auth, Util.getInvitedMeetingList);
router.post('/query', auth, Util.queryMeeting);
router.get('/listAllUsers', auth, Util.listAllUsers);
router.get('/listUsersInMeeting', auth, Util.listUsersInMeeting);
router.get('/listUsersNotInMeeting', auth, Util.listUsersNotInMeeting);

module.exports = router;
