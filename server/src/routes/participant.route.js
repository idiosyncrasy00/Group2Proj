const router = require('express').Router();
const Participant = require('../controllers/participant.controller');
const auth = require('../middlewares/auth');

router.post('/invite', auth, Participant.inviteParticipant);
router.post('/feedback', auth, Participant.feedbackMeeting);

module.exports = router;