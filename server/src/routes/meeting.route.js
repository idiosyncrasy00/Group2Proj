const router = require('express').Router();
const Meeting = require('../controllers/meeting.controller');
const auth = require('../middlewares/auth');

router.post('/create', auth, Meeting.createMeeting);
router.put('/edit', auth, Meeting.editMeeting);
router.delete('/delete', auth, Meeting.deleteMeeting);

module.exports = router;